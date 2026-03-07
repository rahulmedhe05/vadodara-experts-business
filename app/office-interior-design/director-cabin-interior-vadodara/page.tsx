import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "director cabin interior in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional director cabin interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/director-cabin-interior-vadodara" },
  openGraph: {
    title: "director cabin interior in Vadodara | VadodaraExperts",
    description: "Professional director cabin interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/director-cabin-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="director-cabin-interior-vadodara" />;
}
