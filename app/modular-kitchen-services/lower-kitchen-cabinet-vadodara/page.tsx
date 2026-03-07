import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Lower kitchen cabinet in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional lower kitchen cabinet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/lower-kitchen-cabinet-vadodara" },
  openGraph: {
    title: "Lower kitchen cabinet in Vadodara | VadodaraExperts",
    description: "Professional lower kitchen cabinet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/lower-kitchen-cabinet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lower-kitchen-cabinet-vadodara" />;
}
