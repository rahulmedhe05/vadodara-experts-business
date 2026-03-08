import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Mobility trainer in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional mobility trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/mobility-trainer-vadodara" },
  openGraph: {
    title: "Mobility trainer in Vadodara | VadodaraExperts",
    description: "Professional mobility trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/mobility-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mobility-trainer-vadodara" />;
}
