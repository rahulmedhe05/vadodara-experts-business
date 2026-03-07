import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "powder coating for playground equipment in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional powder coating for playground equipment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/powder-coating-for-playground-equipment-vadodara" },
  openGraph: {
    title: "powder coating for playground equipment in Vadodara | VadodaraExperts",
    description: "Professional powder coating for playground equipment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/powder-coating-for-playground-equipment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="powder-coating-for-playground-equipment-vadodara" />;
}
