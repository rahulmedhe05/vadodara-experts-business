import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "rust removal tank in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional rust removal tank services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/rust-removal-tank-vadodara" },
  openGraph: {
    title: "rust removal tank in Vadodara | VadodaraExperts",
    description: "Professional rust removal tank services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/rust-removal-tank-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rust-removal-tank-vadodara" />;
}
