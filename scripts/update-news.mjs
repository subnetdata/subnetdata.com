import fs from 'node:fs/promises';
import path from 'node:path';
import Parser from 'rss-parser';

const parser = new Parser({ timeout: 15000 });
const dataPath = path.resolve('data/news.json');

const sourceConfigs = [
  {
    name: 'Apple',
    feedUrl: 'https://techcrunch.com/tag/apple/feed/',
    humanUrl: 'https://techcrunch.com/tag/apple/'
  },
  {
    name: 'Microsoft',
    feedUrl: 'https://techcrunch.com/tag/microsoft/feed/',
    humanUrl: 'https://techcrunch.com/tag/microsoft/'
  },
  {
    name: 'Business',
    feedUrl: 'https://rss.nytimes.com/services/xml/rss/nyt/Business.xml',
    humanUrl: 'https://www.nytimes.com/section/business'
  }
];

function stripHtml(value) {
  return (value || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function shortContent(item) {
  const raw = item.contentSnippet || item.content || item.summary || '';
  return stripHtml(raw).slice(0, 175);
}

async function readExisting() {
  try {
    const raw = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { generatedAt: '', sources: [] };
  }
}

async function fetchSource(config) {
  const feed = await parser.parseURL(config.feedUrl);
  return {
    name: config.name,
    humanUrl: config.humanUrl,
    items: (feed.items || []).slice(0, 4).map((item) => ({
      title: item.title || 'Untitled',
      link: item.link || config.humanUrl,
      content: shortContent(item)
    }))
  };
}

async function run() {
  const existing = await readExisting();
  const next = {
    generatedAt: new Date().toISOString(),
    sources: []
  };

  for (const config of sourceConfigs) {
    try {
      const source = await fetchSource(config);
      next.sources.push(source);
      console.log(`updated source: ${config.name}`);
    } catch (error) {
      console.error(`source failed: ${config.name} (${error.message})`);
      const fallback = (existing.sources || []).find((source) => source.name === config.name);
      if (fallback) {
        next.sources.push(fallback);
        console.log(`using fallback source data: ${config.name}`);
      } else {
        next.sources.push({
          name: config.name,
          humanUrl: config.humanUrl,
          items: []
        });
      }
    }
  }

  await fs.writeFile(dataPath, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
  console.log(`wrote news data to ${dataPath}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
