import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Mind body trainer in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional mind body trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/mind-body-trainer-vadodara" },
  openGraph: {
    title: "Mind body trainer in Vadodara | VadodaraExperts",
    description: "Professional mind body trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/mind-body-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mind-body-trainer-vadodara" />;
}
