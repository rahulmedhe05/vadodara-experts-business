import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "silica gel packaging in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional silica gel packaging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/silica-gel-packaging-vadodara" },
  openGraph: {
    title: "silica gel packaging in Vadodara | VadodaraExperts",
    description: "Professional silica gel packaging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/silica-gel-packaging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="silica-gel-packaging-vadodara" />;
}
