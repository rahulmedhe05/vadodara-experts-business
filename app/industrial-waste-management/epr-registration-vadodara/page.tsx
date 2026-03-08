import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "EPR registration in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional epr registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/epr-registration-vadodara" },
  openGraph: {
    title: "EPR registration in Vadodara | VadodaraExperts",
    description: "Professional epr registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/epr-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="epr-registration-vadodara" />;
}
