import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "customized corrugated box in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional customized corrugated box services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/customized-corrugated-box-vadodara" },
  openGraph: {
    title: "customized corrugated box in Vadodara | VadodaraExperts",
    description: "Professional customized corrugated box services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/customized-corrugated-box-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="customized-corrugated-box-vadodara" />;
}
