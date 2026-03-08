import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "wooden case in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional wooden case services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/wooden-case-vadodara" },
  openGraph: {
    title: "wooden case in Vadodara | VadodaraExperts",
    description: "Professional wooden case services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/wooden-case-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wooden-case-vadodara" />;
}
