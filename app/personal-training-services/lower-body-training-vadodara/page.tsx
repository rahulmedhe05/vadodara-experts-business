import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Lower body training in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional lower body training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/lower-body-training-vadodara" },
  openGraph: {
    title: "Lower body training in Vadodara | VadodaraExperts",
    description: "Professional lower body training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/lower-body-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lower-body-training-vadodara" />;
}
