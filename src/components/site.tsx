import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoPng from "@/assets/digitech-logo.png";

import { navItems } from "./nav-items";
export { navItems };

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link to="/" aria-label="Digitech home" className="logo-link">
        <img src={logoPng} alt="Digitech Vehicle Comprehensive Pre-Purchase Inspection" className="brand-logo" />
      </Link>
      <div className="brand-wordmark">DIGITECH</div>
      <div className="header-right">
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link to="/inspection" activeProps={{ className: "active" }}>Inspection</Link>
          <Link to="/pricing" activeProps={{ className: "active" }}>Pricing</Link>
          <Link to="/what-we-inspect" className="explore-nav-link">
            Explore <ChevronDown className="explore-icon" />
          </Link>
        </nav>
        <div className="nav-divider" aria-hidden="true" />
        <div className="header-actions">
          <Button asChild variant="editorial" size="editorial"><Link to="/contact">Book Inspection <ArrowRight /></Link></Button>
          <Button asChild variant="ghost" size="icon" className="contact-icon-btn"><Link to="/contact" aria-label="Contact Digitech" title="Contact Digitech"><MessageCircle /></Link></Button>
        </div>
      </div>
      <Button className="menu-button" variant="ghost" size="icon" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </Button>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <div className="mobile-nav-cta">
          <Button asChild variant="editorial" size="editorial"><Link to="/contact" onClick={() => setOpen(false)}>Book Inspection <ArrowRight /></Link></Button>
        </div>
      </nav>}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" aria-label="Digitech home" className="footer-logo-link">
            <img src={logoPng} alt="Digitech" className="brand-logo" />
            <span className="footer-brand-title">DIGITECH</span>
          </Link>
          <p className="footer-desc">
            Independent pre-purchase vehicle inspection in Dubai.
          </p>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-title">INSPECTION</h4>
          <nav aria-label="Footer inspection navigation">
            <Link to="/what-we-inspect">What We Inspect</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/sample-report">Sample Report</Link>
          </nav>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-title">COMPANY</h4>
          <nav aria-label="Footer company navigation">
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-title">CONTACT</h4>
          <nav aria-label="Footer contact navigation">
            <Link to="/contact">Book Inspection</Link>
            <Link to="/contact">Contact Us</Link>
            <span className="footer-meta-item">Dubai, UAE</span>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© {new Date().getFullYear()} Digitech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }

export function ArrowLink({ to, children }: { to: "/inspection" | "/sample-report" | "/contact" | "/what-we-inspect" | "/pricing"; children: ReactNode }) {
  return <Button asChild variant="editorialOutline" size="editorial"><Link to={to}>{children}<ArrowRight /></Link></Button>;
}

export function PageIntro({ eyebrow, title, accent, copy }: { eyebrow: string; title: string; accent?: string; copy: string }) {
  return <section className="page-intro panel"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}{accent && <><br /><span>{accent}</span></>}</h1><p>{copy}</p></section>;
}

export function InfoPanel({ eyebrow, title, accent, copy, children }: { eyebrow: string; title: string; accent?: string; copy: string; children?: ReactNode }) {
  return <article className="info-panel panel"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}{accent && <><br /><span>{accent}</span></>}</h2><p>{copy}</p>{children}</article>;
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="check-list">{items.map((item) => <li key={item}><Check />{item}</li>)}</ul>;
}