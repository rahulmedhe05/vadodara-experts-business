import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Pool epoxy coating in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional pool epoxy coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/pool-epoxy-coating-vadodara" },
  openGraph: {
    title: "Pool epoxy coating in Vadodara | VadodaraExperts",
    description: "Professional pool epoxy coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/pool-epoxy-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pool-epoxy-coating-vadodara" />;
}
