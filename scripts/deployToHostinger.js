import SftpClient from 'ssh2-sftp-client';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function deploy() {
  const host = process.env.HOSTINGER_HOST || '46.202.161.89';
  const port = parseInt(process.env.HOSTINGER_PORT || '65002', 10);
  const username = process.env.HOSTINGER_USER || 'u629155100';
  const password = process.env.HOSTINGER_PASSWORD || 'Hostinger@26';
  const targetDomain = process.env.HOSTINGER_DOMAIN || 'themukteshwarbungalow.in';
  const remoteTarget = `/home/${username}/domains/${targetDomain}/public_html`;

  const sftp = new SftpClient();

  try {
    console.log(`\n🚀 Connecting to Hostinger SFTP (${host}:${port}) as ${username}...`);
    await sftp.connect({
      host,
      port,
      username,
      password,
      readyTimeout: 30000,
    });
    console.log('✅ Connected successfully to Hostinger server!');

    console.log(`📁 Target directory: ${remoteTarget}`);

    // Verify remote directory exists
    const exists = await sftp.exists(remoteTarget);
    if (!exists) {
      throw new Error(`Remote directory ${remoteTarget} does not exist.`);
    }

    const localDist = path.resolve(__dirname, '../dist');
    console.log(`📦 Deploying build from ${localDist}...`);

    let uploadedCount = 0;
    sftp.on('upload', (info) => {
      uploadedCount++;
      if (uploadedCount % 15 === 0 || uploadedCount <= 5) {
        console.log(`  ⬆️  [${uploadedCount}] Uploaded ${path.basename(info.source)}`);
      }
    });

    await sftp.uploadDir(localDist, remoteTarget);

    console.log(`\n✨ Deployment completed! Total ${uploadedCount} files synced.`);
    console.log(`🌐 Live website updated at: https://${targetDomain}/`);
  } catch (err) {
    console.error('\n❌ Deployment error:', err.message);
    process.exit(1);
  } finally {
    try {
      await sftp.end();
    } catch {}
  }
}

deploy();
