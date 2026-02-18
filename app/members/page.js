import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Members | Subnet Data Services',
  description: 'Member access information for Subnet Data Services.'
};

export default function MembersPage() {
  return (
    <>
      <Nav />
      <div className="row margin-page">
        <div className="col-md-6 col-md-push-3 col-sm-8 col-sm-push-2 col-xs-10 col-xs-push-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>Members</h3>
              <p>The legacy authenticated members portal is no longer available on this static site.</p>
              <p>Please contact <a href="mailto:info@subnetdata.com">info@subnetdata.com</a> for file access requests.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
