import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "Sysmac Studio in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional sysmac studio services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/sysmac-studio-vadodara" },
  openGraph: {
    title: "Sysmac Studio in Vadodara | VadodaraExperts",
    description: "Professional sysmac studio services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/sysmac-studio-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sysmac-studio-vadodara" />;
}
