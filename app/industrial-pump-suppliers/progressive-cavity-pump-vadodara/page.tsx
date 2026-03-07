import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "progressive cavity pump in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional progressive cavity pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/progressive-cavity-pump-vadodara" },
  openGraph: {
    title: "progressive cavity pump in Vadodara | VadodaraExperts",
    description: "Professional progressive cavity pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/progressive-cavity-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="progressive-cavity-pump-vadodara" />;
}
