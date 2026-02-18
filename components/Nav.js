'use client';

import { useEffect, useMemo, useState } from 'react';
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
  const onHome = pathname === '/';
  const [activeSection, setActiveSection] = useState('home');

  const sectionOrder = useMemo(() => (['services', 'partners', 'news', 'about']), []);

  useEffect(() => {
    if (!onHome) return;

    const updateActive = () => {
      const threshold = 160;
      let current = 'home';

      for (const section of sectionOrder) {
        const el = document.getElementById(section);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [onHome, sectionOrder]);

  const sectionIsActive = (section) => onHome && activeSection === section;
  const homeIsActive = onHome ? activeSection === 'home' : false;
  const membersIsActive = isActive(pathname, '/members');
  const contactIsActive = isActive(pathname, '/contact');

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
            <li className={homeIsActive ? 'active' : ''}><a href={pathname === '/' ? '#' : '/'}>Home</a></li>
            <li className={sectionIsActive('services') ? 'active' : ''}><a href={sectionHref(pathname, 'services')}>Services</a></li>
            <li className={sectionIsActive('partners') ? 'active' : ''}><a href={sectionHref(pathname, 'partners')}>Partners</a></li>
            <li className={sectionIsActive('news') ? 'active' : ''}><a href={sectionHref(pathname, 'news')}>News</a></li>
            <li className={sectionIsActive('about') ? 'active' : ''}><a href={sectionHref(pathname, 'about')}>About</a></li>
            <li className={membersIsActive ? 'active' : ''}><a href="/members/">Members</a></li>
            <li className={contactIsActive ? 'active' : ''}><a href="/contact/">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
