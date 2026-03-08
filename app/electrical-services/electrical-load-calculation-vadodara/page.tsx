import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Electrical load calculation in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional electrical load calculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/electrical-load-calculation-vadodara" },
  openGraph: {
    title: "Electrical load calculation in Vadodara | VadodaraExperts",
    description: "Professional electrical load calculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/electrical-load-calculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrical-load-calculation-vadodara" />;
}
