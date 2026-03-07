import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Export duty in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional export duty services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/export-duty-vadodara" },
  openGraph: {
    title: "Export duty in Vadodara | VadodaraExperts",
    description: "Professional export duty services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/export-duty-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="export-duty-vadodara" />;
}
