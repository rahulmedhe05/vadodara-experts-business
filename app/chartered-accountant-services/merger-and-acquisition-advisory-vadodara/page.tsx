import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Merger and acquisition advisory in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional merger and acquisition advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/merger-and-acquisition-advisory-vadodara" },
  openGraph: {
    title: "Merger and acquisition advisory in Vadodara | VadodaraExperts",
    description: "Professional merger and acquisition advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/merger-and-acquisition-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="merger-and-acquisition-advisory-vadodara" />;
}
