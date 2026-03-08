import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Contoura vision in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional contoura vision services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/contoura-vision-vadodara" },
  openGraph: {
    title: "Contoura vision in Vadodara | VadodaraExperts",
    description: "Professional contoura vision services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/contoura-vision-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="contoura-vision-vadodara" />;
}
