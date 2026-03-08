import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Export to Africa from in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional export to africa from services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/export-to-africa-from-vadodara" },
  openGraph: {
    title: "Export to Africa from in Vadodara | VadodaraExperts",
    description: "Professional export to africa from services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/export-to-africa-from-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="export-to-africa-from-vadodara" />;
}
