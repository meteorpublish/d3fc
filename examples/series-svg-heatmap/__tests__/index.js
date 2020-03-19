const { join } = require('path');

it('should match the image snapshot', async () => {
    await page.goto(
        'http://localhost:8080/examples/series-svg-heatmap/index.html'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
});

it('should look good on the website!', async () => {
    await page.goto(
        'http://localhost:8080/examples/series-svg-heatmap/index.html'
    );
    await page.screenshot({ path: join(__dirname, '..', 'screenshot.png') });
    await page.screenshot({
        path: '../packages/d3fc-series/screenshots/heatmap.png'
    });
});