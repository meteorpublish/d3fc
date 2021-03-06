const { join } = require('path');

it('should match the image snapshot', async () => {
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
});

it('should look good on the website!', async () => {
    await page.goto('file://' + join(__dirname, '..', 'index.html'));
    await page.screenshot({ path: join(__dirname, '..', 'screenshot.png') });
});
