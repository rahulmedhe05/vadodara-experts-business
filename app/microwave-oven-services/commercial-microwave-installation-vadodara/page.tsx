import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "Commercial microwave installation in Vadodara | Microwave Oven Services | VadodaraExperts",
  description: "Professional commercial microwave installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services/commercial-microwave-installation-vadodara" },
  openGraph: {
    title: "Commercial microwave installation in Vadodara | VadodaraExperts",
    description: "Professional commercial microwave installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/microwave-oven-services/commercial-microwave-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-microwave-installation-vadodara" />;
}
