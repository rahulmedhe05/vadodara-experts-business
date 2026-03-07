import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Yoga school in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional yoga school services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/yoga-school-vadodara" },
  openGraph: {
    title: "Yoga school in Vadodara | VadodaraExperts",
    description: "Professional yoga school services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/yoga-school-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="yoga-school-vadodara" />;
}
