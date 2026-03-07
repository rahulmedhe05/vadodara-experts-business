import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Kitchen hob installation in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional kitchen hob installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/kitchen-hob-installation-vadodara" },
  openGraph: {
    title: "Kitchen hob installation in Vadodara | VadodaraExperts",
    description: "Professional kitchen hob installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/kitchen-hob-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-hob-installation-vadodara" />;
}
