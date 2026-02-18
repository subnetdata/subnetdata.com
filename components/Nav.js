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
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const sectionIsActive = (section) => onHome && activeSection === section;
  const homeIsActive = onHome ? activeSection === 'home' : false;
  const membersIsActive = isActive(pathname, '/members');
  const contactIsActive = isActive(pathname, '/contact');

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="topnav" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle${menuOpen ? '' : ' collapsed'}`}
            aria-expanded={menuOpen}
            aria-controls="main-nav-collapse"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand sds-logo" href="/">
            <img src="/assets/img/subnetsm.png" alt="Subnet Data Services" />
          </a>
        </div>
        <div id="main-nav-collapse" className={`main-nav-wrap${menuOpen ? ' open' : ''}`}>
          <ul className="nav navbar-nav navbar-right main-nav">
            <li className={homeIsActive ? 'active' : ''}><a href={pathname === '/' ? '#' : '/'} onClick={closeMenu}>Home</a></li>
            <li className={sectionIsActive('services') ? 'active' : ''}><a href={sectionHref(pathname, 'services')} onClick={closeMenu}>Services</a></li>
            <li className={sectionIsActive('partners') ? 'active' : ''}><a href={sectionHref(pathname, 'partners')} onClick={closeMenu}>Partners</a></li>
            <li className={sectionIsActive('news') ? 'active' : ''}><a href={sectionHref(pathname, 'news')} onClick={closeMenu}>News</a></li>
            <li className={sectionIsActive('about') ? 'active' : ''}><a href={sectionHref(pathname, 'about')} onClick={closeMenu}>About</a></li>
            <li className={membersIsActive ? 'active' : ''}><a href="/members/" onClick={closeMenu}>Members</a></li>
            <li className={contactIsActive ? 'active' : ''}><a href="/contact/" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
