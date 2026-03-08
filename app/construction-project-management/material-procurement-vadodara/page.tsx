import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "material procurement in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional material procurement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/material-procurement-vadodara" },
  openGraph: {
    title: "material procurement in Vadodara | VadodaraExperts",
    description: "Professional material procurement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/material-procurement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="material-procurement-vadodara" />;
}
