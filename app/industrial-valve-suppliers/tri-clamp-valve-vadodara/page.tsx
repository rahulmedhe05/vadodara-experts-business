import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-valve-suppliers")!;

export const metadata: Metadata = {
  title: "tri clamp valve in Vadodara | Industrial Valve Suppliers | VadodaraExperts",
  description: "Professional tri clamp valve services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-valve-suppliers/tri-clamp-valve-vadodara" },
  openGraph: {
    title: "tri clamp valve in Vadodara | VadodaraExperts",
    description: "Professional tri clamp valve services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-valve-suppliers/tri-clamp-valve-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tri-clamp-valve-vadodara" />;
}
