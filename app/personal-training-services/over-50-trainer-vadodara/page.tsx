import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Over 50 trainer in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional over 50 trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/over-50-trainer-vadodara" },
  openGraph: {
    title: "Over 50 trainer in Vadodara | VadodaraExperts",
    description: "Professional over 50 trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/over-50-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="over-50-trainer-vadodara" />;
}
