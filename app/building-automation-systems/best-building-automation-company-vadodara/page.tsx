import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "best building automation company in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional best building automation company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/best-building-automation-company-vadodara" },
  openGraph: {
    title: "best building automation company in Vadodara | VadodaraExperts",
    description: "Professional best building automation company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/best-building-automation-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-building-automation-company-vadodara" />;
}
