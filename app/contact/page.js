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

          <form
            action="https://formspree.io/f/xnjbzqrk"
            method="POST"
            className="form contact-form"
          >
            <input type="hidden" name="_subject" value="SDS Web Lead" />
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject:</label>
              <input className="form-control" id="subject" name="subject" type="text" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="company">Company:</label>
              <input className="form-control" id="company" name="company" type="text" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="first_name">First Name:</label>
              <input className="form-control" id="first_name" name="first_name" type="text" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="last_name">Last Name:</label>
              <input className="form-control" id="last_name" name="last_name" type="text" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email:</label>
              <input className="form-control" id="email" name="email" type="email" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="body">Message:</label>
              <textarea className="form-control" id="body" name="body" rows="8" required />
            </div>

            <div><button type="submit" className="btn btn-primary">Send</button></div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
