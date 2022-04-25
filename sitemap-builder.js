const SitemapGenerator = require('sitemap-generator');

const generator = SitemapGenerator('http://catinella.co.uk', {
    stripQuerystring: false,
    filepath: './public/sitemap.xml',
    lastMod: true,
});

generator.start();
