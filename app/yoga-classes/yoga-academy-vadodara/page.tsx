import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Yoga academy in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional yoga academy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/yoga-academy-vadodara" },
  openGraph: {
    title: "Yoga academy in Vadodara | VadodaraExperts",
    description: "Professional yoga academy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/yoga-academy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="yoga-academy-vadodara" />;
}
