import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "industrial packaging services in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional industrial packaging services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/industrial-packaging-services-vadodara" },
  openGraph: {
    title: "industrial packaging services in Vadodara | VadodaraExperts",
    description: "Professional industrial packaging services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/industrial-packaging-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-packaging-services-vadodara" />;
}
