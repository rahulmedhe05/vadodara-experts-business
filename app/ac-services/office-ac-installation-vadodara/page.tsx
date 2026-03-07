import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "Office AC installation in Vadodara | AC Services | VadodaraExperts",
  description: "Professional office ac installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/office-ac-installation-vadodara" },
  openGraph: {
    title: "Office AC installation in Vadodara | VadodaraExperts",
    description: "Professional office ac installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/office-ac-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-ac-installation-vadodara" />;
}
