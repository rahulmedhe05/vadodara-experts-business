import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "ball valve supplier in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional ball valve supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/ball-valve-supplier-vadodara" },
  openGraph: {
    title: "ball valve supplier in Vadodara | VadodaraExperts",
    description: "Professional ball valve supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/ball-valve-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ball-valve-supplier-vadodara" />;
}
