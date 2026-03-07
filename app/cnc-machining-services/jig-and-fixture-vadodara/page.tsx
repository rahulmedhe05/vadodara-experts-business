import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "jig and fixture in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional jig and fixture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/jig-and-fixture-vadodara" },
  openGraph: {
    title: "jig and fixture in Vadodara | VadodaraExperts",
    description: "Professional jig and fixture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/jig-and-fixture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="jig-and-fixture-vadodara" />;
}
