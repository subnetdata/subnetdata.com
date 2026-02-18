import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Contact | Subnet Data Services',
  description: 'Contact Subnet Data Services in Boise, Idaho.'
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <div className="row margin-page">
        <div className="col-md-6 col-md-push-3 col-sm-8 col-sm-push-2 col-xs-10 col-xs-push-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>Contact</h3>
              <p>Email: <a href="mailto:info@subnetdata.com">info@subnetdata.com</a></p>
              <p>
                Mailing Address<br />
                1775 W. State Street, #321, Boise ID 83702
              </p>
              <p>
                Service Office (by appointment only)<br />
                4948 W Kootenai St, Boise, ID 83705
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
