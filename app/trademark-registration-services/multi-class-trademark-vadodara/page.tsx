import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Multi class trademark in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional multi class trademark services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/multi-class-trademark-vadodara" },
  openGraph: {
    title: "Multi class trademark in Vadodara | VadodaraExperts",
    description: "Professional multi class trademark services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/multi-class-trademark-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-class-trademark-vadodara" />;
}
