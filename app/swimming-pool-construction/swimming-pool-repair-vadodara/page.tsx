import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Swimming pool repair in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional swimming pool repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/swimming-pool-repair-vadodara" },
  openGraph: {
    title: "Swimming pool repair in Vadodara | VadodaraExperts",
    description: "Professional swimming pool repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/swimming-pool-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="swimming-pool-repair-vadodara" />;
}
