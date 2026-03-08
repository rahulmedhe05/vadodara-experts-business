import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "valve dealer in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional valve dealer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/valve-dealer-vadodara" },
  openGraph: {
    title: "valve dealer in Vadodara | VadodaraExperts",
    description: "Professional valve dealer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/valve-dealer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="valve-dealer-vadodara" />;
}
