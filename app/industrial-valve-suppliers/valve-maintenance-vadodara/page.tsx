import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "valve maintenance in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional valve maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/valve-maintenance-vadodara" },
  openGraph: {
    title: "valve maintenance in Vadodara | VadodaraExperts",
    description: "Professional valve maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/valve-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="valve-maintenance-vadodara" />;
}
