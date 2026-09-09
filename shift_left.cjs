const fs = require('fs');

let code = fs.readFileSync('src/pages/StJudeHome.tsx', 'utf8');

// Replace max-w-container-max mx-auto with wide fluid margin to shift content all the way to the left side
code = code.replace(/max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 xl:px-10/g, 'w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16');
code = code.replace(/max-w-container-max mx-auto/g, 'w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16');

fs.writeFileSync('src/pages/StJudeHome.tsx', code);
console.log('Successfully shifted content to the left side in StJudeHome.tsx');
