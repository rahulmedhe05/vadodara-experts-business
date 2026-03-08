import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("laser-cutting-services")!;

export const metadata: Metadata = {
  title: "laser surface treatment in Vadodara | Laser Cutting Services | VadodaraExperts",
  description: "Professional laser surface treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/laser-cutting-services/laser-surface-treatment-vadodara" },
  openGraph: {
    title: "laser surface treatment in Vadodara | VadodaraExperts",
    description: "Professional laser surface treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/laser-cutting-services/laser-surface-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="laser-surface-treatment-vadodara" />;
}
