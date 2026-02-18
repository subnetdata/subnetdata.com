# subnetdata.com

Static React site powered by Next.js static export.

## Commands

- `npm install`
- `npm run update-news` - refresh `data/news.json` from configured RSS feeds
- `npm run build` - generate static output in `out/`
- `npm run dev` - local development

## Daily automation

The workflow in `.github/workflows/update-news.yml` runs once per day at `13:00 UTC` and can also be run manually.

Behavior:

- Fetch latest RSS items from configured sources
- Update `data/news.json`
- Build the site to validate output
- Commit and push `data/news.json` when content changed
- Optionally trigger deployment via `DEPLOY_HOOK_URL` secret
