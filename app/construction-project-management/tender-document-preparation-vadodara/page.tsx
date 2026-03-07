import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "tender document preparation in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional tender document preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/tender-document-preparation-vadodara" },
  openGraph: {
    title: "tender document preparation in Vadodara | VadodaraExperts",
    description: "Professional tender document preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/tender-document-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tender-document-preparation-vadodara" />;
}
