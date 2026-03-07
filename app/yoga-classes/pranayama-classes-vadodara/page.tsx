import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Pranayama classes in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional pranayama classes services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/pranayama-classes-vadodara" },
  openGraph: {
    title: "Pranayama classes in Vadodara | VadodaraExperts",
    description: "Professional pranayama classes services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/pranayama-classes-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pranayama-classes-vadodara" />;
}
