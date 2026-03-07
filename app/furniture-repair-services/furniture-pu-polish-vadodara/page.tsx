import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Furniture PU polish in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional furniture pu polish services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/furniture-pu-polish-vadodara" },
  openGraph: {
    title: "Furniture PU polish in Vadodara | VadodaraExperts",
    description: "Professional furniture pu polish services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/furniture-pu-polish-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="furniture-pu-polish-vadodara" />;
}
