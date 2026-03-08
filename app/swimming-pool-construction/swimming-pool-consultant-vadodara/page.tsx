import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Swimming pool consultant in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional swimming pool consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/swimming-pool-consultant-vadodara" },
  openGraph: {
    title: "Swimming pool consultant in Vadodara | VadodaraExperts",
    description: "Professional swimming pool consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/swimming-pool-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="swimming-pool-consultant-vadodara" />;
}
