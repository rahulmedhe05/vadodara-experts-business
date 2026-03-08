import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Salt chlorination system in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional salt chlorination system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/salt-chlorination-system-vadodara" },
  openGraph: {
    title: "Salt chlorination system in Vadodara | VadodaraExperts",
    description: "Professional salt chlorination system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/salt-chlorination-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="salt-chlorination-system-vadodara" />;
}
