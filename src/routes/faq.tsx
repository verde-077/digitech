import { createFileRoute } from "@tanstack/react-router";import { ArrowLink, PageIntro, PageShell } from "@/components/site";
export const Route=createFileRoute("/faq")({head:()=>({meta:[{title:"Vehicle Inspection FAQ — Digi-Tech"},{name:"description",content:"Answers about Digi-Tech pre-purchase vehicle inspections."},{property:"og:title",content:"Vehicle Inspection FAQ — Digi-Tech"},{property:"og:description",content:"Inspection location, scope and report delivery."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
const faqs=[
  ["Where is the vehicle inspected?","At the seller’s location in Dubai."],
  ["What does the inspection cover?","The inspection includes 450+ points across the engine, transmission, body, suspension, electrical systems and more."],
  ["What do I receive?","A detailed digital report with inspection findings and photographs."],
  ["How is the report delivered?","The report can be delivered digitally by WhatsApp or email."],
  ["Can I see a sample report?","Yes. Request the current sample report from Digi-Tech."],
  ["How much does an inspection cost?","Current package pricing is confirmed for the vehicle when you contact Digi-Tech."],
];
function Page(){return <PageShell><PageIntro eyebrow="Frequently asked questions" title="Short answers." accent="Before you book." copy="Verified details about the inspection and report."/><section className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section><section className="cta-panel panel"><h2>Need another answer?</h2><p>Send the vehicle details with your question.</p><ArrowLink to="/contact">Contact Digi-Tech</ArrowLink></section></PageShell>}