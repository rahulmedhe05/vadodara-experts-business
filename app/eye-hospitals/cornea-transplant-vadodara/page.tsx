import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Cornea transplant in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional cornea transplant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/cornea-transplant-vadodara" },
  openGraph: {
    title: "Cornea transplant in Vadodara | VadodaraExperts",
    description: "Professional cornea transplant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/cornea-transplant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cornea-transplant-vadodara" />;
}
