const fs = require('fs');
const path = require('path');

// Масив нових назв для картин
const newNames = [
    'portrait-spring-tenderness.png',      // painting1.png
    'abstract-dark-soul.png',              // painting2.png
    'landscape-moonlight-night.png',       // painting3.png
    'still-life-gothic-flowers.png',       // painting4.png
    'portrait-mysterious-gaze.png',        // painting5.png
    'portrait-contemplation.png',          // Знімок екрана 2025-07-20 052100.png
    'portrait-mysterious-look.png',        // Знімок екрана 2025-07-20 052110.png
    'portrait-spring-delicacy.png',        // Знімок екрана 2025-07-20 052129.png
    'portrait-autumn-melancholy.png',      // Знімок екрана 2025-07-20 052139.png
    'portrait-summer-freshness.png',       // Знімок екрана 2025-07-20 052149.png
    'portrait-evening-mystery.png',        // Знімок екрана 2025-07-20 052159.png
    'portrait-winter-elegance.png'         // Знімок екрана 2025-07-20 052211.png
];

// Функція для перейменування файлів
const renameFiles = () => {
    const imagesDir = path.join(__dirname, 'public/images');
    
    // Перейменовуємо існуючі painting1-5.png
    for (let i = 1; i <= 5; i++) {
        const oldName = `painting${i}.png`;
        const newName = newNames[i-1];
        const oldPath = path.join(imagesDir, oldName);
        const newPath = path.join(imagesDir, newName);
        
        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            console.log(`✅ Перейменовано: ${oldName} → ${newName}`);
        }
    }
    
    // Перейменовуємо знімки екрану
    const screenshots = [
        'Знімок екрана 2025-07-20 052100.png',
        'Знімок екрана 2025-07-20 052110.png',
        'Знімок екрана 2025-07-20 052129.png',
        'Знімок екрана 2025-07-20 052139.png',
        'Знімок екрана 2025-07-20 052149.png',
        'Знімок екрана 2025-07-20 052159.png',
        'Знімок екрана 2025-07-20 052211.png'
    ];
    
    screenshots.forEach((screenshot, index) => {
        const oldPath = path.join(imagesDir, screenshot);
        const newName = newNames[index + 5]; // Починаємо з індексу 5
        const newPath = path.join(imagesDir, newName);
        
        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            console.log(`✅ Перейменовано: ${screenshot} → ${newName}`);
        }
    });
    
    console.log('\n🎨 Всі зображення перейменовано на семантичні назви!');
};

// Запускаємо перейменування
try {
    renameFiles();
} catch (error) {
    console.error('❌ Помилка при перейменуванні:', error.message);
} 