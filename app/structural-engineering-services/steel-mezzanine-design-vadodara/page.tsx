import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Steel mezzanine design in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional steel mezzanine design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/steel-mezzanine-design-vadodara" },
  openGraph: {
    title: "Steel mezzanine design in Vadodara | VadodaraExperts",
    description: "Professional steel mezzanine design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/steel-mezzanine-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-mezzanine-design-vadodara" />;
}
