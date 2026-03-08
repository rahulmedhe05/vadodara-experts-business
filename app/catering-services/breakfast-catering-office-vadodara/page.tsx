import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Breakfast catering office in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional breakfast catering office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/breakfast-catering-office-vadodara" },
  openGraph: {
    title: "Breakfast catering office in Vadodara | VadodaraExperts",
    description: "Professional breakfast catering office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/breakfast-catering-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="breakfast-catering-office-vadodara" />;
}
