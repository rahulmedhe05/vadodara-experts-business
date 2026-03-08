import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Corneal ring implant in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional corneal ring implant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/corneal-ring-implant-vadodara" },
  openGraph: {
    title: "Corneal ring implant in Vadodara | VadodaraExperts",
    description: "Professional corneal ring implant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/corneal-ring-implant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corneal-ring-implant-vadodara" />;
}
