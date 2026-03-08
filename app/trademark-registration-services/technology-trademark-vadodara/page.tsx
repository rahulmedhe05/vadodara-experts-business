import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Technology trademark in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional technology trademark services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/technology-trademark-vadodara" },
  openGraph: {
    title: "Technology trademark in Vadodara | VadodaraExperts",
    description: "Professional technology trademark services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/technology-trademark-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="technology-trademark-vadodara" />;
}
