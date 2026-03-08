import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "best fire fighting company in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional best fire fighting company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/best-fire-fighting-company-vadodara" },
  openGraph: {
    title: "best fire fighting company in Vadodara | VadodaraExperts",
    description: "Professional best fire fighting company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/best-fire-fighting-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-fire-fighting-company-vadodara" />;
}
