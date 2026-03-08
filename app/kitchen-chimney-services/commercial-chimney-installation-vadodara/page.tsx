import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Commercial chimney installation in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional commercial chimney installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/commercial-chimney-installation-vadodara" },
  openGraph: {
    title: "Commercial chimney installation in Vadodara | VadodaraExperts",
    description: "Professional commercial chimney installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/commercial-chimney-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-chimney-installation-vadodara" />;
}
