import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Overhead tank pump in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional overhead tank pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/overhead-tank-pump-vadodara" },
  openGraph: {
    title: "Overhead tank pump in Vadodara | VadodaraExperts",
    description: "Professional overhead tank pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/overhead-tank-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="overhead-tank-pump-vadodara" />;
}
