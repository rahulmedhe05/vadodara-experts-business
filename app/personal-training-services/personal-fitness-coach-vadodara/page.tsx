import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Personal fitness coach in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional personal fitness coach services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/personal-fitness-coach-vadodara" },
  openGraph: {
    title: "Personal fitness coach in Vadodara | VadodaraExperts",
    description: "Professional personal fitness coach services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/personal-fitness-coach-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="personal-fitness-coach-vadodara" />;
}
