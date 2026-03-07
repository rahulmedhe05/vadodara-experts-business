import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Lifestyle coaching in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional lifestyle coaching services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/lifestyle-coaching-vadodara" },
  openGraph: {
    title: "Lifestyle coaching in Vadodara | VadodaraExperts",
    description: "Professional lifestyle coaching services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/lifestyle-coaching-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lifestyle-coaching-vadodara" />;
}
