import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("abrasive-grinding-suppliers")!;

export const metadata: Metadata = {
  title: "Cheap Abrasive Grinding Suppliers in Vadodara | Abrasive Grinding Suppliers | VadodaraExperts",
  description: "Professional cheap abrasive grinding suppliers services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/abrasive-grinding-suppliers/cheap-abrasive-grinding-suppliers-vadodara" },
  openGraph: {
    title: "Cheap Abrasive Grinding Suppliers in Vadodara | VadodaraExperts",
    description: "Professional cheap abrasive grinding suppliers services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/abrasive-grinding-suppliers/cheap-abrasive-grinding-suppliers-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cheap-abrasive-grinding-suppliers-vadodara" />;
}
