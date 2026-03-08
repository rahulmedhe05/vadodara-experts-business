import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "bus duct installation in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional bus duct installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/bus-duct-installation-vadodara" },
  openGraph: {
    title: "bus duct installation in Vadodara | VadodaraExperts",
    description: "Professional bus duct installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/bus-duct-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bus-duct-installation-vadodara" />;
}
