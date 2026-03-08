import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "ISO tank container in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional iso tank container services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/iso-tank-container-vadodara" },
  openGraph: {
    title: "ISO tank container in Vadodara | VadodaraExperts",
    description: "Professional iso tank container services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/iso-tank-container-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iso-tank-container-vadodara" />;
}
