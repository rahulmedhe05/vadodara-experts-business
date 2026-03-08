import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "portable office cabin in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional portable office cabin services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/portable-office-cabin-vadodara" },
  openGraph: {
    title: "portable office cabin in Vadodara | VadodaraExperts",
    description: "Professional portable office cabin services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/portable-office-cabin-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="portable-office-cabin-vadodara" />;
}
