import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Yoga studio in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional yoga studio services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/yoga-studio-vadodara" },
  openGraph: {
    title: "Yoga studio in Vadodara | VadodaraExperts",
    description: "Professional yoga studio services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/yoga-studio-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="yoga-studio-vadodara" />;
}
