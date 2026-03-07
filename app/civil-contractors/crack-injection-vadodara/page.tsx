import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Crack injection in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional crack injection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/crack-injection-vadodara" },
  openGraph: {
    title: "Crack injection in Vadodara | VadodaraExperts",
    description: "Professional crack injection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/crack-injection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="crack-injection-vadodara" />;
}
