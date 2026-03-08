import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "butt weld valve in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional butt weld valve services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/butt-weld-valve-vadodara" },
  openGraph: {
    title: "butt weld valve in Vadodara | VadodaraExperts",
    description: "Professional butt weld valve services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/butt-weld-valve-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="butt-weld-valve-vadodara" />;
}
