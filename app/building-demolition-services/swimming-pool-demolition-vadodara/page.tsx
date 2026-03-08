import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "swimming pool demolition in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional swimming pool demolition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/swimming-pool-demolition-vadodara" },
  openGraph: {
    title: "swimming pool demolition in Vadodara | VadodaraExperts",
    description: "Professional swimming pool demolition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/swimming-pool-demolition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="swimming-pool-demolition-vadodara" />;
}
