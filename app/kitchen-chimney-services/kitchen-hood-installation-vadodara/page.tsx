import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Kitchen hood installation in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional kitchen hood installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/kitchen-hood-installation-vadodara" },
  openGraph: {
    title: "Kitchen hood installation in Vadodara | VadodaraExperts",
    description: "Professional kitchen hood installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/kitchen-hood-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-hood-installation-vadodara" />;
}
