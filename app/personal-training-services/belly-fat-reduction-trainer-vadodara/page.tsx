import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Belly fat reduction trainer in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional belly fat reduction trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/belly-fat-reduction-trainer-vadodara" },
  openGraph: {
    title: "Belly fat reduction trainer in Vadodara | VadodaraExperts",
    description: "Professional belly fat reduction trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/belly-fat-reduction-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="belly-fat-reduction-trainer-vadodara" />;
}
