'use client';

import { usePathname } from 'next/navigation';

function sectionHref(pathname, section) {
  return pathname === '/' ? `#${section}` : `/#${section}`;
}

function isActive(pathname, path) {
  if (path === '/') return pathname === '/';
  return pathname.startsWith(path);
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <div id="topnav" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand sds-logo" href="/">
            <img src="/assets/img/subnetsm.png" alt="Subnet Data Services" />
          </a>
        </div>
        <div className="navbar-collapse collapse in">
          <ul className="nav navbar-nav navbar-right main-nav">
            <li className={isActive(pathname, '/') ? 'active' : ''}><a href={pathname === '/' ? '#' : '/'}>Home</a></li>
            <li><a href={sectionHref(pathname, 'services')}>Services</a></li>
            <li><a href={sectionHref(pathname, 'partners')}>Partners</a></li>
            <li><a href={sectionHref(pathname, 'news')}>News</a></li>
            <li><a href={sectionHref(pathname, 'about')}>About</a></li>
            <li className={isActive(pathname, '/members') ? 'active' : ''}><a href="/members/">Members</a></li>
            <li className={isActive(pathname, '/contact') ? 'active' : ''}><a href="/contact/">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
