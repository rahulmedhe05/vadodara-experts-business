import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Buyer seller meet in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional buyer seller meet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/buyer-seller-meet-vadodara" },
  openGraph: {
    title: "Buyer seller meet in Vadodara | VadodaraExperts",
    description: "Professional buyer seller meet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/buyer-seller-meet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="buyer-seller-meet-vadodara" />;
}
