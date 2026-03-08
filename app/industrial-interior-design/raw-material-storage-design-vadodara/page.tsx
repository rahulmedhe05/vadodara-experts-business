import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "raw material storage design in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional raw material storage design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/raw-material-storage-design-vadodara" },
  openGraph: {
    title: "raw material storage design in Vadodara | VadodaraExperts",
    description: "Professional raw material storage design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/raw-material-storage-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="raw-material-storage-design-vadodara" />;
}
