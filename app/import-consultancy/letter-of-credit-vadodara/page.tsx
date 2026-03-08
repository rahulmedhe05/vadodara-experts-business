import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Letter of credit in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional letter of credit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/letter-of-credit-vadodara" },
  openGraph: {
    title: "Letter of credit in Vadodara | VadodaraExperts",
    description: "Professional letter of credit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/letter-of-credit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="letter-of-credit-vadodara" />;
}
