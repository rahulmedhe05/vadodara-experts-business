import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Furniture varnish in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional furniture varnish services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/furniture-varnish-vadodara" },
  openGraph: {
    title: "Furniture varnish in Vadodara | VadodaraExperts",
    description: "Professional furniture varnish services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/furniture-varnish-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="furniture-varnish-vadodara" />;
}
