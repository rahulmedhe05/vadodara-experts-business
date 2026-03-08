import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Soft close hinge in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional soft close hinge services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/soft-close-hinge-vadodara" },
  openGraph: {
    title: "Soft close hinge in Vadodara | VadodaraExperts",
    description: "Professional soft close hinge services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/soft-close-hinge-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="soft-close-hinge-vadodara" />;
}
