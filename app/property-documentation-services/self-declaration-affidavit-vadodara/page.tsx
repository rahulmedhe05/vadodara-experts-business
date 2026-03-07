import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Self declaration affidavit in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional self declaration affidavit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/self-declaration-affidavit-vadodara" },
  openGraph: {
    title: "Self declaration affidavit in Vadodara | VadodaraExperts",
    description: "Professional self declaration affidavit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/self-declaration-affidavit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="self-declaration-affidavit-vadodara" />;
}
