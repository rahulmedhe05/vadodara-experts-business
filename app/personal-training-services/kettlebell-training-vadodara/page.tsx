import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Kettlebell training in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional kettlebell training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/kettlebell-training-vadodara" },
  openGraph: {
    title: "Kettlebell training in Vadodara | VadodaraExperts",
    description: "Professional kettlebell training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/kettlebell-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kettlebell-training-vadodara" />;
}
