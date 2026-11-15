import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Instagram, ArrowUpRight } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <div className="topline">A CREATIVE COLOR STUDIO <span>•</span> BUILT TO BE DIFFERENT</div>
    <header className="site-header">
      <Link className="wordmark" to="/" onClick={close}>OFF<span>BEAT</span></Link>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'main-nav is-open' : 'main-nav'}>
        <NavLink to="/gallery" onClick={close}>Portfolio</NavLink><NavLink to="/services" onClick={close}>Services</NavLink><NavLink to="/about" onClick={close}>Studio</NavLink>
        <Link className="button button-dark nav-book" to="/contact" onClick={close}>Book <ArrowUpRight size={15}/></Link>
      </nav>
    </header>
  </>;
}
export function Footer() {
  return <footer className="footer"><div className="footer-top"><div><Link className="wordmark footer-mark" to="/">OFF<span>BEAT</span></Link><p>Hair with a point of view.<br/>Nails with a little attitude.</p></div><div className="footer-links"><div><b>EXPLORE</b><Link to="/gallery">Portfolio</Link><Link to="/services">Services</Link><Link to="/about">Our studio</Link></div><div><b>SAY HELLO</b><Link to="/contact">Book an appointment</Link><a href="mailto:hello@offbeat.studio">hello@offbeat.studio</a><a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={14}/> Instagram</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} OFFBEAT CREATIVE STUDIO</span><span>MADE FOR THE UNCOMMON.</span></div></footer>;
}
export default function Layout() { return <><Header/><main><Outlet/></main><Footer/></>; }
