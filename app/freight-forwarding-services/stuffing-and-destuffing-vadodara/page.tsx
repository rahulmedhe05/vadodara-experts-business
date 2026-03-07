import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Stuffing and destuffing in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional stuffing and destuffing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/stuffing-and-destuffing-vadodara" },
  openGraph: {
    title: "Stuffing and destuffing in Vadodara | VadodaraExperts",
    description: "Professional stuffing and destuffing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/stuffing-and-destuffing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stuffing-and-destuffing-vadodara" />;
}
