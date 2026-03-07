import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "DCR surgery in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional dcr surgery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/dcr-surgery-vadodara" },
  openGraph: {
    title: "DCR surgery in Vadodara | VadodaraExperts",
    description: "Professional dcr surgery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/dcr-surgery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dcr-surgery-vadodara" />;
}
