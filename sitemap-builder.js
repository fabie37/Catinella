require('babel-register')({
    presets: ['es2015', 'react'],
});

const Routing = require('./src/routing').default;
const SitemapGenerator = require('sitemap-generator');

let paths = [];
const exclusion = ['/', '*'];
const url = 'https://catinella.co.uk';

Routing().props['children'].forEach((child) => {
    let path = child.props.path;
    if (!exclusion.includes(path)) {
        paths.push(path);
    }
});

console.log(paths);

const generator = SitemapGenerator('http://catinella.co.uk', {
    stripQuerystring: false,
    filepath: './public/sitemap.xml',
    lastMod: true,
});

const crawler = generator.getCrawler();
const sitemap = generator.getSitemap();

// Add static URL on crawl init.
crawler.on('crawlstart', () => {
    paths.forEach((path) => {
        sitemap.addURL(url + path);
    });
});

generator.start();
