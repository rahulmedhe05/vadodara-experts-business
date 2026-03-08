import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Tiffin service in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional tiffin service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/tiffin-service-vadodara" },
  openGraph: {
    title: "Tiffin service in Vadodara | VadodaraExperts",
    description: "Professional tiffin service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/tiffin-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tiffin-service-vadodara" />;
}
