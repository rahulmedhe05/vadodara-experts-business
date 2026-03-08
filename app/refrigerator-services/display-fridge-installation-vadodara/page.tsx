import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Display fridge installation in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional display fridge installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/display-fridge-installation-vadodara" },
  openGraph: {
    title: "Display fridge installation in Vadodara | VadodaraExperts",
    description: "Professional display fridge installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/display-fridge-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="display-fridge-installation-vadodara" />;
}
