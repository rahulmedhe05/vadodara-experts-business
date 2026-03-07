import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Swimming pool contractor in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional swimming pool contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/swimming-pool-contractor-vadodara" },
  openGraph: {
    title: "Swimming pool contractor in Vadodara | VadodaraExperts",
    description: "Professional swimming pool contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/swimming-pool-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="swimming-pool-contractor-vadodara" />;
}
