import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Upper kitchen cabinet in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional upper kitchen cabinet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/upper-kitchen-cabinet-vadodara" },
  openGraph: {
    title: "Upper kitchen cabinet in Vadodara | VadodaraExperts",
    description: "Professional upper kitchen cabinet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/upper-kitchen-cabinet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="upper-kitchen-cabinet-vadodara" />;
}
