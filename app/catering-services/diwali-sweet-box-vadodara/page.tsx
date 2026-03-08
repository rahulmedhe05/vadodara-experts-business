import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Diwali sweet box in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional diwali sweet box services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/diwali-sweet-box-vadodara" },
  openGraph: {
    title: "Diwali sweet box in Vadodara | VadodaraExperts",
    description: "Professional diwali sweet box services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/diwali-sweet-box-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="diwali-sweet-box-vadodara" />;
}
