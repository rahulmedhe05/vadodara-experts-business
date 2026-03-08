import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "packaging solution in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional packaging solution services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/packaging-solution-vadodara" },
  openGraph: {
    title: "packaging solution in Vadodara | VadodaraExperts",
    description: "Professional packaging solution services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/packaging-solution-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="packaging-solution-vadodara" />;
}
