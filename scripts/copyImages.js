import fs from 'fs';
import path from 'path';

const sourceBase = 'D:\\Mukteshwar Bungalow';
const destBase = 'd:\\The Mukteshwar Villa Live Website\\public\\images';

const imageMappings = [
  // Exterior
  {
    src: path.join(sourceBase, 'Villa Exterior -20260830T173059Z-1-001', 'Villa Exterior', '_DSC6859-HDRAI.jpeg'),
    dest: path.join(destBase, 'exterior', 'the-mukteshwar-bungalow-exterior-mukteshwar-uttarakhand.jpg')
  },
  {
    src: path.join(sourceBase, 'Villa Exterior -20260830T173059Z-1-001', 'Villa Exterior', '_DSC6789-HDR-2.jpeg'),
    dest: path.join(destBase, 'exterior', 'villa-exterior-himalayan-architecture.jpg')
  },
  {
    src: path.join(sourceBase, 'Villa Exterior -20260830T173059Z-1-001', 'Villa Exterior', '_DSC6794-HDR.jpeg'),
    dest: path.join(destBase, 'exterior', 'villa-exterior-facade-daylight.jpg')
  },
  {
    src: path.join(sourceBase, 'Villa Exterior -20260830T173059Z-1-001', 'Villa Exterior', '_DSC6849-HDR.jpeg'),
    dest: path.join(destBase, 'exterior', 'villa-exterior-front-deck.jpg')
  },
  {
    src: path.join(sourceBase, 'Villa Exterior -20260830T173059Z-1-001', 'Villa Exterior', '_DSC7321-HDR.jpeg'),
    dest: path.join(destBase, 'exterior', 'villa-exterior-sunset-dusk.jpg')
  },
  {
    src: path.join(sourceBase, 'Villa Exterior -20260830T173059Z-1-001', 'Villa Exterior', '_DSC7451-HDR.jpeg'),
    dest: path.join(destBase, 'exterior', 'villa-exterior-mountain-ridge.jpg')
  },
  {
    src: path.join(sourceBase, 'Villa Exterior -20260830T173059Z-1-001', 'Villa Exterior', '_DSC6804-HDR-2.jpeg'),
    dest: path.join(destBase, 'exterior', 'villa-exterior-side-elevation.jpg')
  },

  // Verandah & Open Space
  {
    src: path.join(sourceBase, 'Verandah-20260830T173052Z-1-001', 'Verandah', '_DSC6819-HDR-2.jpeg'),
    dest: path.join(destBase, 'veranda', 'veranda-lounge-morning-tea-seating.jpg')
  },
  {
    src: path.join(sourceBase, 'Verandah-20260830T173052Z-1-001', 'Verandah', '_DSC6824-HDR-2.jpeg'),
    dest: path.join(destBase, 'veranda', 'veranda-lounge-indoor-outdoor-flow.jpg')
  },
  {
    src: path.join(sourceBase, 'Verandah-20260830T173052Z-1-001', 'Verandah', '_DSC7296-HDR.jpeg'),
    dest: path.join(destBase, 'veranda', 'veranda-lounge-panoramic-view.jpg')
  },
  {
    src: path.join(sourceBase, 'Verandah-20260830T173052Z-1-001', 'Verandah', '_DSC7416-HDR-2.jpeg'),
    dest: path.join(destBase, 'veranda', 'veranda-open-space-terrace.jpg')
  },
  {
    src: path.join(sourceBase, 'Verandah-20260830T173052Z-1-001', 'Verandah', '_DSC7426-HDR-3.jpeg'),
    dest: path.join(destBase, 'veranda', 'veranda-lounge-evening-bonfire.jpg')
  },
  {
    src: path.join(sourceBase, 'Verandah-20260830T173052Z-1-001', 'Verandah', '_DSC7306-HDR.jpeg'),
    dest: path.join(destBase, 'pool', 'private-pool-deck-himalayan-view.jpg')
  },

  // Room 1: The Himalayan Suite
  {
    src: path.join(sourceBase, 'The Himalayan Suite Room ( 1 )-20260830T173013Z-1-001', 'The Himalayan Suite Room ( 1 )', '_DSC6978-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'himalayan-suite', 'himalayan-suite-master-king-bed.jpg')
  },
  {
    src: path.join(sourceBase, 'The Himalayan Suite Room ( 1 )-20260830T173013Z-1-001', 'The Himalayan Suite Room ( 1 )', '_DSC6988-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'himalayan-suite', 'himalayan-suite-interior-detail.jpg')
  },
  {
    src: path.join(sourceBase, 'The Himalayan Suite Room ( 1 )-20260830T173013Z-1-001', 'The Himalayan Suite Room ( 1 )', '_DSC7013-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'himalayan-suite', 'himalayan-suite-mountain-window-view.jpg')
  },
  {
    src: path.join(sourceBase, 'The Himalayan Suite Room ( 1 )-20260830T173013Z-1-001', 'The Himalayan Suite Room ( 1 )', '_DSC7038-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'himalayan-suite', 'himalayan-suite-ensuite-bathroom.jpg')
  },
  {
    src: path.join(sourceBase, 'The Himalayan Suite Room ( 1 )-20260830T173013Z-1-001', 'The Himalayan Suite Room ( 1 )', '_DSC7058-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'himalayan-suite', 'himalayan-suite-reading-lounge.jpg')
  },

  // Room 3: The Imperial Suite
  {
    src: path.join(sourceBase, 'The Imperial Suite Room ( 3 )-20260830T173023Z-1-001', 'The Imperial Suite Room ( 3 )', '_DSC7157-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'imperial-suite', 'imperial-suite-heritage-king-bed.jpg')
  },
  {
    src: path.join(sourceBase, 'The Imperial Suite Room ( 3 )-20260830T173023Z-1-001', 'The Imperial Suite Room ( 3 )', '_DSC7182-HDR-3.jpg'),
    dest: path.join(destBase, 'rooms', 'imperial-suite', 'imperial-suite-timber-ceilings.jpg')
  },
  {
    src: path.join(sourceBase, 'The Imperial Suite Room ( 3 )-20260830T173023Z-1-001', 'The Imperial Suite Room ( 3 )', '_DSC7200-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'imperial-suite', 'imperial-suite-private-sitting.jpg')
  },
  {
    src: path.join(sourceBase, 'The Imperial Suite Room ( 3 )-20260830T173023Z-1-001', 'The Imperial Suite Room ( 3 )', '_DSC7235-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'imperial-suite', 'imperial-suite-luxury-bathroom.jpg')
  },

  // Room 2: The Signature Himalayan Suite
  {
    src: path.join(sourceBase, 'The Signature Himalayan Suite Room ( 2 )-20260830T173042Z-1-001', 'The Signature Himalayan Suite Room ( 2 )', '_DSC6888-HDR copy.jpg'),
    dest: path.join(destBase, 'rooms', 'signature-himalayan', 'signature-himalayan-suite-panoramic-view.jpg')
  },
  {
    src: path.join(sourceBase, 'The Signature Himalayan Suite Room ( 2 )-20260830T173042Z-1-001', 'The Signature Himalayan Suite Room ( 2 )', '_DSC6898-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'signature-himalayan', 'signature-himalayan-suite-king-bed.jpg')
  },
  {
    src: path.join(sourceBase, 'The Signature Himalayan Suite Room ( 2 )-20260830T173042Z-1-001', 'The Signature Himalayan Suite Room ( 2 )', '_DSC6918-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'signature-himalayan', 'signature-himalayan-suite-warm-interior.jpg')
  },
  {
    src: path.join(sourceBase, 'The Signature Himalayan Suite Room ( 2 )-20260830T173042Z-1-001', 'The Signature Himalayan Suite Room ( 2 )', '_DSC6938-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'signature-himalayan', 'signature-himalayan-suite-bathroom.jpg')
  },
  {
    src: path.join(sourceBase, 'The Signature Himalayan Suite Room ( 2 )-20260830T173042Z-1-001', 'The Signature Himalayan Suite Room ( 2 )', '_DSC7361-HDR.jpg'),
    dest: path.join(destBase, 'rooms', 'signature-himalayan', 'signature-himalayan-suite-terrace-access.jpg')
  },

  // Living Rooms
  {
    src: path.join(sourceBase, 'Living Room 1 -20260830T172904Z-1-001', 'Living Room 1', '_DSC7241-HDR-2.jpg'),
    dest: path.join(destBase, 'living', 'living-room-fireplace-lounge.jpg')
  },
  {
    src: path.join(sourceBase, 'Living Room 1 -20260830T172904Z-1-001', 'Living Room 1', '_DSC7251-HDR.jpg'),
    dest: path.join(destBase, 'living', 'living-room-family-dining.jpg')
  },
  {
    src: path.join(sourceBase, 'Living Room 2-20260830T172910Z-1-001', 'Living Room 2', '_DSC7102-HDR-2.jpg'),
    dest: path.join(destBase, 'living', 'living-room-mountain-views.jpg')
  },
  {
    src: path.join(sourceBase, 'Living Room 2-20260830T172910Z-1-001', 'Living Room 2', '_DSC7122-HDR.jpg'),
    dest: path.join(destBase, 'living', 'living-room-reading-corner.jpg')
  },

  // Kitchen
  {
    src: path.join(sourceBase, 'Kitchen-20260830T172859Z-1-001', 'Kitchen', 'Copy of _DSC7326-HDR-2.jpg'),
    dest: path.join(destBase, 'kitchen', 'fully-equipped-kitchen-dining-counter.jpg')
  },
  {
    src: path.join(sourceBase, 'Kitchen-20260830T172859Z-1-001', 'Kitchen', 'Copy of _DSC7331-HDR.jpg'),
    dest: path.join(destBase, 'kitchen', 'fully-equipped-kitchen-appliances-cookware.jpg')
  },
  {
    src: path.join(sourceBase, 'Kitchen-20260830T172859Z-1-001', 'Kitchen', 'Copy of _DSC7336-HDR.jpg'),
    dest: path.join(destBase, 'kitchen', 'fully-equipped-kitchen-spacious-prep.jpg')
  },

  // Garden
  {
    src: path.join(sourceBase, 'Garden -20260830T172736Z-1-001', 'Garden', '_DSC7431-HDR.jpg'),
    dest: path.join(destBase, 'garden', 'villa-garden-private-lawn.jpg')
  },
  {
    src: path.join(sourceBase, 'Garden -20260830T172736Z-1-001', 'Garden', '_DSC7441-HDR.jpg'),
    dest: path.join(destBase, 'garden', 'villa-garden-himalayan-backdrop.jpg')
  },
  {
    src: path.join(sourceBase, 'Garden -20260830T172736Z-1-001', 'Garden', '_DSC7132-HDR.jpg'),
    dest: path.join(destBase, 'garden', 'villa-garden-stone-pathway.jpg')
  },
  {
    src: path.join(sourceBase, 'Garden -20260830T172736Z-1-001', 'Garden', '_DSC7456-HDR-2.jpg'),
    dest: path.join(destBase, 'garden', 'villa-garden-sunset-terrace.jpg')
  }
];

let copiedCount = 0;

for (const item of imageMappings) {
  try {
    const dir = path.dirname(item.dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (fs.existsSync(item.src)) {
      fs.copyFileSync(item.src, item.dest);
      copiedCount++;
      console.log(`[OK] Copied: ${path.basename(item.dest)}`);
    } else {
      console.warn(`[MISSING] Source file not found: ${item.src}`);
    }
  } catch (err) {
    console.error(`[ERROR] Copying ${item.src} -> ${item.dest}:`, err.message);
  }
}

console.log(`\n Successfully organized ${copiedCount}/${imageMappings.length} authentic property photoshoot images.`);
