import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Pediatric retina in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional pediatric retina services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/pediatric-retina-vadodara" },
  openGraph: {
    title: "Pediatric retina in Vadodara | VadodaraExperts",
    description: "Professional pediatric retina services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/pediatric-retina-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pediatric-retina-vadodara" />;
}
