import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLink, Eyebrow, InfoPanel, PageShell } from "@/components/site";
import slide1Img from "@/assets/slide1.jpg";
import slide2Img from "@/assets/slide2.jpg";
import slide3Img from "@/assets/slide3.jpg";
import slide4Img from "@/assets/slide4.jpg";
import slide5Img from "@/assets/slide5.jpg";
import headlight from "@/assets/digitech-headlight.jpg";
import inspector from "@/assets/digitech-inspector.jpg";
import wheelInspection from "@/assets/digitech-wheel-inspection.jpg";

const heroSlides = [
  { id: 1, title: "Wheel & Exterior Inspection", img: slide1Img, alt: "Inspector checking vehicle wheel and exterior body panel with tablet" },
  { id: 2, title: "Engine Bay & Mechanicals", img: slide2Img, alt: "Inspector checking engine bay components and diagnostics" },
  { id: 3, title: "Paint & Structural Body Check", img: slide3Img, alt: "Inspector examining body panels with paint thickness gauge" },
  { id: 4, title: "Interior & Electronics Check", img: slide4Img, alt: "Inspector checking interior dashboard electronics and controls" },
  { id: 5, title: "OBD2 Diagnostic Systems", img: slide5Img, alt: "Inspector running OBD2 computerized diagnostic scan" },
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Digi-Tech — Pre-Purchase Vehicle Inspection" },
    { name: "description", content: "Independent vehicle inspection at the seller's location in Dubai." },
    { property: "og:title", content: "Digi-Tech — Pre-Purchase Vehicle Inspection" },
    { property: "og:description", content: "Know the car before you buy it." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return <PageShell>
    <section className="hero-panel panel">
      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
      </div>
      <div className="hero-copy">
        <Eyebrow>Pre-purchase vehicle inspection</Eyebrow>
        <h1>Know the car<br /><span>before you buy it.</span></h1>
        <p>Independent vehicle inspection at the seller’s location in Dubai, with detailed findings and photographic evidence.</p>
        <div className="cta-row">
          <Button asChild variant="editorial" size="editorial"><Link to="/contact">Book an Inspection <ArrowRight /></Link></Button>
          <Button asChild variant="editorialOutline" size="editorial"><Link to="/contact"><MessageCircle /> Contact Us</Link></Button>
        </div>
      </div>
      <div className="hero-car-wrapper">
        {heroSlides.map((slide, idx) => (
          <img
            key={slide.id}
            className={`hero-car hero-car-${slide.id} ${idx === activeSlide ? "active" : ""}`}
            src={slide.img}
            alt={slide.alt}
          />
        ))}
      </div>
      <div className="hero-meta">
        <div className="carousel-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`dot ${idx === activeSlide ? "active" : ""}`}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <span className="slide-counter">0{activeSlide + 1} / 0{heroSlides.length}</span>
        </div>
        <span className="scroll-mark">Scroll</span>
      </div>
    </section>

    <section className="mobile-only mobile-intro">
      <p className="eyebrow">What we check</p>
      <h2>Every detail, <span>documented.</span></h2>

      <div className="mobile-strip">
        <div><b>150+</b><span>point checks</span></div>
        <div><b>24h</b><span>report delivery</span></div>
        <div><b>Photos</b><span>of every finding</span></div>
      </div>
    </section>

    <section className="editorial-grid bento-tile-1">
      <InfoPanel eyebrow="Comprehensive inspection" title="450+ points." accent="Nothing missed." copy="From engine and transmission to body, suspension, electrical systems and more — we inspect every detail so you can make a confident decision."><ArrowLink to="/what-we-inspect">View All Inspection Points</ArrowLink></InfoPanel>
      <div className="image-panel panel"><img src={headlight} alt="Silver vehicle headlight detail" loading="lazy" width={1024} height={1024} className="img-headlight" /></div>
    </section>

    <section className="editorial-grid bento-tile-2">
      <div className="image-panel panel"><img src={inspector} alt="Inspector checking an engine bay" loading="lazy" width={1024} height={1024} className="img-inspector" /></div>
      <InfoPanel eyebrow="Detailed report" title="Clear findings." accent="Real evidence." copy="Receive a detailed digital report with inspection results, photographs and clear findings."><ArrowLink to="/sample-report">View Sample Report</ArrowLink></InfoPanel>
    </section>

    <section className="section-heading"><Eyebrow>What we inspect</Eyebrow><h2>One car. <span>A complete view.</span></h2></section>
    <section className="editorial-grid compact-grid bento-tile-3">
      <InfoPanel eyebrow="Vehicle systems" title="From body" accent="to road test." copy="The inspection covers mechanical, electrical, structural, interior and road-test checks."><ArrowLink to="/what-we-inspect">See inspection scope</ArrowLink></InfoPanel>
      <div className="image-panel panel"><img src={wheelInspection} alt="Technician inspecting a vehicle wheel and suspension" loading="lazy" width={1024} height={768} className="img-wheel" /></div>
    </section>

    <section className="section-heading"><Eyebrow>How it works</Eyebrow><h2>Three clear steps.</h2></section>
    <section className="steps panel"><div><b>01</b><h3>Book</h3><p>Share the vehicle and seller details.</p></div><div><b>02</b><h3>Inspect</h3><p>An inspector checks the vehicle at the seller’s location.</p></div><div><b>03</b><h3>Review</h3><p>Receive the findings and photographic evidence.</p></div></section>

    <section className="editorial-grid compact-grid bento-tile-3">
      <InfoPanel eyebrow="Packages and pricing" title="The right scope." accent="No guesswork." copy="Choose the inspection package that fits the vehicle. Current prices are confirmed when you book."><Button asChild variant="editorial" size="editorial"><Link to="/pricing">View Packages <ArrowRight /></Link></Button></InfoPanel>
      <InfoPanel eyebrow="Why Digi-Tech" title="Independent findings." accent="Before you commit." copy="The inspection is completed before purchase and documented for your review."><ArrowLink to="/inspection">About the inspection</ArrowLink></InfoPanel>
    </section>

    <section className="cta-panel panel"><Eyebrow>Pre-purchase vehicle inspection</Eyebrow><h2>Book before you buy.</h2><p>Share the vehicle details to start your inspection request.</p><Button asChild variant="editorial" size="editorial"><Link to="/contact">Book Inspection <ArrowRight /></Link></Button></section>
  </PageShell>;
}