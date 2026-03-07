import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Women body toning in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional women body toning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/women-body-toning-vadodara" },
  openGraph: {
    title: "Women body toning in Vadodara | VadodaraExperts",
    description: "Professional women body toning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/women-body-toning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="women-body-toning-vadodara" />;
}
