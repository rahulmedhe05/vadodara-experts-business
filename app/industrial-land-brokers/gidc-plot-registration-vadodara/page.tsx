import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "GIDc plot registration in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional gidc plot registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/gidc-plot-registration-vadodara" },
  openGraph: {
    title: "GIDc plot registration in Vadodara | VadodaraExperts",
    description: "Professional gidc plot registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/gidc-plot-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gidc-plot-registration-vadodara" />;
}
