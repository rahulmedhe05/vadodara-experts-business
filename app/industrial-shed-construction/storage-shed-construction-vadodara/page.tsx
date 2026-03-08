import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "storage shed construction in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional storage shed construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/storage-shed-construction-vadodara" },
  openGraph: {
    title: "storage shed construction in Vadodara | VadodaraExperts",
    description: "Professional storage shed construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/storage-shed-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="storage-shed-construction-vadodara" />;
}
