import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Mithai catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional mithai catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/mithai-catering-vadodara" },
  openGraph: {
    title: "Mithai catering in Vadodara | VadodaraExperts",
    description: "Professional mithai catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/mithai-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mithai-catering-vadodara" />;
}
