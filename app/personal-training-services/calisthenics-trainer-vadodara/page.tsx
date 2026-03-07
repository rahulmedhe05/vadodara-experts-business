import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Calisthenics trainer in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional calisthenics trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/calisthenics-trainer-vadodara" },
  openGraph: {
    title: "Calisthenics trainer in Vadodara | VadodaraExperts",
    description: "Professional calisthenics trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/calisthenics-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="calisthenics-trainer-vadodara" />;
}
