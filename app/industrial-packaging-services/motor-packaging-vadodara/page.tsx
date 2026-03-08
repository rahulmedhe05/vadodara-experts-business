import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "motor packaging in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional motor packaging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/motor-packaging-vadodara" },
  openGraph: {
    title: "motor packaging in Vadodara | VadodaraExperts",
    description: "Professional motor packaging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/motor-packaging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="motor-packaging-vadodara" />;
}
