const fs = require('fs');
const path = require('path');

// Створюємо простий HTML файл для кожної картини-заглушки
const createPlaceholder = (number) => {
    const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Painting ${number} - Placeholder</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #1a0033, #330066, #1a0033);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: monospace;
            color: #fff;
        }
        .placeholder {
            text-align: center;
            padding: 2rem;
            border: 2px solid #ff00ff;
            border-radius: 20px;
            background: rgba(0, 0, 0, 0.8);
            box-shadow: 0 0 30px rgba(255, 0, 255, 0.3);
        }
        .icon {
            font-size: 4rem;
            margin-bottom: 1rem;
        }
        .title {
            font-size: 1.5rem;
            color: #ff00ff;
            margin-bottom: 0.5rem;
        }
        .subtitle {
            font-size: 1rem;
            color: #ccc;
        }
    </style>
</head>
<body>
    <div class="placeholder">
        <div class="icon">🎨</div>
        <div class="title">Картина ${number}</div>
        <div class="subtitle">Вікторія Гордій</div>
        <div class="subtitle">@vi.violet.art</div>
    </div>
</body>
</html>`;

    return html;
};

// Створюємо заглушки для картин 6-10
for (let i = 6; i <= 10; i++) {
    const html = createPlaceholder(i);
    fs.writeFileSync(path.join(__dirname, `public/images/painting${i}.html`), html);
    console.log(`Створено заглушку для painting${i}.html`);
}

console.log('Всі заглушки створені!'); 