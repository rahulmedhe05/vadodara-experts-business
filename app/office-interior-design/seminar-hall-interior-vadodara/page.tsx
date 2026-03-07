import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "seminar hall interior in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional seminar hall interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/seminar-hall-interior-vadodara" },
  openGraph: {
    title: "seminar hall interior in Vadodara | VadodaraExperts",
    description: "Professional seminar hall interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/seminar-hall-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="seminar-hall-interior-vadodara" />;
}
