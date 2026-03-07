import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Buffet setup in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional buffet setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/buffet-setup-vadodara" },
  openGraph: {
    title: "Buffet setup in Vadodara | VadodaraExperts",
    description: "Professional buffet setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/buffet-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="buffet-setup-vadodara" />;
}
