import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Thyroid fitness trainer in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional thyroid fitness trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/thyroid-fitness-trainer-vadodara" },
  openGraph: {
    title: "Thyroid fitness trainer in Vadodara | VadodaraExperts",
    description: "Professional thyroid fitness trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/thyroid-fitness-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="thyroid-fitness-trainer-vadodara" />;
}
