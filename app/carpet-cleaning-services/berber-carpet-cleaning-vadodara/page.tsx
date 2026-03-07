import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpet-cleaning-services")!;

export const metadata: Metadata = {
  title: "Berber carpet cleaning in Vadodara | Carpet Cleaning Services | VadodaraExperts",
  description: "Professional berber carpet cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpet-cleaning-services/berber-carpet-cleaning-vadodara" },
  openGraph: {
    title: "Berber carpet cleaning in Vadodara | VadodaraExperts",
    description: "Professional berber carpet cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpet-cleaning-services/berber-carpet-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="berber-carpet-cleaning-vadodara" />;
}
