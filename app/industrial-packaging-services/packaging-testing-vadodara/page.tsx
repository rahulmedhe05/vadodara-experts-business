import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "packaging testing in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional packaging testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/packaging-testing-vadodara" },
  openGraph: {
    title: "packaging testing in Vadodara | VadodaraExperts",
    description: "Professional packaging testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/packaging-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="packaging-testing-vadodara" />;
}
