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
          <div className="panel panel-info">
            <div className="panel-heading">
              <h2 className="panel-title"><b>Contact Info</b></h2>
            </div>
            <div className="panel-body">
              <b>Subnet Data Services, LLC</b> <br />
              1775 W. State Street, #321 <br />
              Boise, ID 83702 <br />
              (208) 918-1999
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
