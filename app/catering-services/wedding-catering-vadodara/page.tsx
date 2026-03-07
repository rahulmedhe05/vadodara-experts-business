import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Wedding catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional wedding catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/wedding-catering-vadodara" },
  openGraph: {
    title: "Wedding catering in Vadodara | VadodaraExperts",
    description: "Professional wedding catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/wedding-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-catering-vadodara" />;
}
