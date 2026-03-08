import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Lasik surgery in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional lasik surgery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/lasik-surgery-vadodara" },
  openGraph: {
    title: "Lasik surgery in Vadodara | VadodaraExperts",
    description: "Professional lasik surgery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/lasik-surgery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lasik-surgery-vadodara" />;
}
