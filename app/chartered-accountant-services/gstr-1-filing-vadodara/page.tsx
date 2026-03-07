import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "GSTR 1 filing in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional gstr 1 filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/gstr-1-filing-vadodara" },
  openGraph: {
    title: "GSTR 1 filing in Vadodara | VadodaraExperts",
    description: "Professional gstr 1 filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/gstr-1-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gstr-1-filing-vadodara" />;
}
