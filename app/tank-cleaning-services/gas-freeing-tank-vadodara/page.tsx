import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "gas freeing tank in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional gas freeing tank services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/gas-freeing-tank-vadodara" },
  openGraph: {
    title: "gas freeing tank in Vadodara | VadodaraExperts",
    description: "Professional gas freeing tank services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/gas-freeing-tank-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gas-freeing-tank-vadodara" />;
}
