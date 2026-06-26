const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');
const css = fs.readFileSync('styles.css', 'utf-8');
const js = fs.readFileSync('script.js', 'utf-8');

function b64(path, mime) {
  const data = fs.readFileSync(path);
  return `data:${mime};base64,` + data.toString('base64');
}

const logo = b64('assets/logo.png', 'image/png');
const hero = b64('assets/hero.mp4', 'video/mp4');
const posterRef = b64('assets/poster-ref.jpg', 'image/jpeg');
const wallpaper = b64('assets/wallpaper.jpg', 'image/jpeg');

html = html.replace(
  '<link rel="stylesheet" href="styles.css" />',
  `<style>\n${css}\n</style>`
);
html = html.replace(
  '<script src="script.js"></script>',
  `<script>\n${js}\n</script>`
);
html = html.split('assets/logo.png').join(logo);
html = html.split('assets/hero.mp4').join(hero);
html = html.split('assets/poster-ref.jpg').join(posterRef);
html = html.split('assets/wallpaper.jpg').join(wallpaper);

fs.writeFileSync('airXpert-standalone.html', html);
console.log('done', (Buffer.byteLength(html) / 1024 / 1024).toFixed(2), 'MB');
