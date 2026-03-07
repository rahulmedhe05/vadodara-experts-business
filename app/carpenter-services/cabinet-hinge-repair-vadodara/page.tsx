import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Cabinet hinge repair in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional cabinet hinge repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/cabinet-hinge-repair-vadodara" },
  openGraph: {
    title: "Cabinet hinge repair in Vadodara | VadodaraExperts",
    description: "Professional cabinet hinge repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/cabinet-hinge-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cabinet-hinge-repair-vadodara" />;
}
