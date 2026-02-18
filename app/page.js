import Nav from '../components/Nav';
import Footer from '../components/Footer';
import services from '../data/services';
import partners from '../data/partners';

function Masthead() {
  return (
    <div id="headerwrap">
      <div className="container">
        <div className="row centered">
          <div className="col-lg-8 col-lg-offset-2">
            <h1>Subnet Data Services</h1>
            <h2>For all your tech related needs</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div id="services" className="container services">
      <div className="row centered equalize-rows">
        <br />
        <h2>Services</h2>
        <br />
        <br />
        {services.map((item) => (
          <div key={item.label} className="service-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <i className={`fa ${item.icon}`} />
            <div className="row"><h4 className="col-xs-8 col-xs-push-2">{item.label}</h4></div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}

function Partners() {
  return (
    <div id="partners" className="portfolio">
      <div className="container">
        <div className="row">
          <h2>Partners</h2>
          <br />
          <br />
          {partners.map((partner) => (
            <div key={partner.name} className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
              <div className="thumbnail">
                <a href={partner.url} target="_blank" rel="noreferrer">
                  <img className="img-responsive center-block" src={partner.logo} alt={partner.name} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="portfolio">
      <div className="container">
        <div className="row">
          <h2>About</h2>
          <br />
          <br />

          <div className="col-lg-6 col-lg-push-3 col-md-8 col-md-push-2 col-sm-10 col-sm-push-1 col-xs-10 col-xs-push-1">
            <div>
              <p>
                Subnet Data has been serving the IT needs of the Treasure Valley since 2010.
                We specialize in small to medium size companies that don&apos;t have their own in-house IT personnel.
                We can assist you with all of your IT, backup, and security needs. By working with top tier channel
                partners, we bring you value added solutions for &quot;one stop shopping&quot;. If we don&apos;t have access to the
                technological resources in-house, we will help you find the right person or company to fit your needs.
                We look forward to assisting you.
              </p>
              <p>
                Mailing Address<br />
                1775 W. State Street, #321, Boise ID 83702
              </p>
              <p>
                Service Office (<b>by appointment only</b>)<br />
                4948 W Kootenai St, Boise, ID 83705
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <Masthead />
      <Services />
      <Partners />
      <About />
      <Footer />
    </>
  );
}
