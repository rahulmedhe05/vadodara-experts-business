import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "custom packaging design in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional custom packaging design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/custom-packaging-design-vadodara" },
  openGraph: {
    title: "custom packaging design in Vadodara | VadodaraExperts",
    description: "Professional custom packaging design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/custom-packaging-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="custom-packaging-design-vadodara" />;
}
