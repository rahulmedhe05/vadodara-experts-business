import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Anti-dumping duty in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional anti-dumping duty services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/anti-dumping-duty-vadodara" },
  openGraph: {
    title: "Anti-dumping duty in Vadodara | VadodaraExperts",
    description: "Professional anti-dumping duty services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/anti-dumping-duty-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-dumping-duty-vadodara" />;
}
