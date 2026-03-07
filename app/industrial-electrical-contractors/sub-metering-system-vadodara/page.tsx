import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "sub metering system in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional sub metering system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/sub-metering-system-vadodara" },
  openGraph: {
    title: "sub metering system in Vadodara | VadodaraExperts",
    description: "Professional sub metering system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/sub-metering-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sub-metering-system-vadodara" />;
}
