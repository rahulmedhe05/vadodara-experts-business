import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Yoga for pregnant women in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional yoga for pregnant women services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/yoga-for-pregnant-women-vadodara" },
  openGraph: {
    title: "Yoga for pregnant women in Vadodara | VadodaraExperts",
    description: "Professional yoga for pregnant women services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/yoga-for-pregnant-women-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="yoga-for-pregnant-women-vadodara" />;
}
