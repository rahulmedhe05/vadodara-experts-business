import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Fashion brand registration in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional fashion brand registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/fashion-brand-registration-vadodara" },
  openGraph: {
    title: "Fashion brand registration in Vadodara | VadodaraExperts",
    description: "Professional fashion brand registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/fashion-brand-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fashion-brand-registration-vadodara" />;
}
