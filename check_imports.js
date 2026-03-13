import * as Lucide from 'lucide-react';

const icons = [
    'Wrench', 'HelpCircle', 'ArrowDown', 'Utensils', 'FileText', 'Heart'
];

console.log('--- Final Check ---');
icons.forEach(icon => {
    if (Lucide[icon]) {
        console.log(`FOUND: ${icon}`);
    } else {
        console.error(`MISSING: ${icon}`);
    }
});
console.log('--- Done ---');
