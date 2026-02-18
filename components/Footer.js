export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="row centered">
          &copy; {new Date().getFullYear()} Subnet Data Services LLC. <br />
          All rights reserved. All trademarks are the property of their respective owners.
        </div>
      </div>
    </div>
  );
}
