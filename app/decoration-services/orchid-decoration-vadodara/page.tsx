import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Orchid decoration in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional orchid decoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/orchid-decoration-vadodara" },
  openGraph: {
    title: "Orchid decoration in Vadodara | VadodaraExperts",
    description: "Professional orchid decoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/orchid-decoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="orchid-decoration-vadodara" />;
}
