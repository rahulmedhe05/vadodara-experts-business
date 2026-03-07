import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Sivananda yoga in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional sivananda yoga services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/sivananda-yoga-vadodara" },
  openGraph: {
    title: "Sivananda yoga in Vadodara | VadodaraExperts",
    description: "Professional sivananda yoga services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/sivananda-yoga-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sivananda-yoga-vadodara" />;
}
