const fs = require('fs');

test('index.html existe', () => {
    const fileExists = fs.existsSync('index.html');
    expect(fileExists).toBe(true);
});
