import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Yoga for immunity in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional yoga for immunity services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/yoga-for-immunity-vadodara" },
  openGraph: {
    title: "Yoga for immunity in Vadodara | VadodaraExperts",
    description: "Professional yoga for immunity services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/yoga-for-immunity-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="yoga-for-immunity-vadodara" />;
}
