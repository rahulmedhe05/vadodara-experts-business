import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "pipe truss shed in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional pipe truss shed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/pipe-truss-shed-vadodara" },
  openGraph: {
    title: "pipe truss shed in Vadodara | VadodaraExperts",
    description: "Professional pipe truss shed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/pipe-truss-shed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pipe-truss-shed-vadodara" />;
}
