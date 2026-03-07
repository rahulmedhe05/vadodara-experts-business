import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Wellness coach in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional wellness coach services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/wellness-coach-vadodara" },
  openGraph: {
    title: "Wellness coach in Vadodara | VadodaraExperts",
    description: "Professional wellness coach services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/wellness-coach-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wellness-coach-vadodara" />;
}
