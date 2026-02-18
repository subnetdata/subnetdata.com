import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import news from '../../data/news.json';

export const metadata = {
  title: 'News | Subnet Data Services',
  description: 'Latest industry headlines aggregated daily by Subnet Data Services.'
};

export default function NewsPage() {
  return (
    <>
      <Nav />
      <div id="news" className="container wb margin-page">
        <h2 className="centered">News</h2>
        <br />
        {news.generatedAt ? <p className="centered">Last updated: {new Date(news.generatedAt).toLocaleString()}</p> : null}
        {news.sources.map((source) => (
          <div className="news-item row equalize-rows" key={source.name}>
            <h3 className="news-header">
              <a href={source.humanUrl} target="_blank" rel="noreferrer">{source.name}</a>
            </h3>
            {source.items.length === 0 ? (
              <div className="col-lg-12"><p>No stories available.</p></div>
            ) : (
              source.items.map((item) => (
                <div key={item.link} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <b><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></b>
                  <p>{item.content}</p>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
