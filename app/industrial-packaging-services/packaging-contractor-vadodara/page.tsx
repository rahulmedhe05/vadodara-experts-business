import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "packaging contractor in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional packaging contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/packaging-contractor-vadodara" },
  openGraph: {
    title: "packaging contractor in Vadodara | VadodaraExperts",
    description: "Professional packaging contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/packaging-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="packaging-contractor-vadodara" />;
}
