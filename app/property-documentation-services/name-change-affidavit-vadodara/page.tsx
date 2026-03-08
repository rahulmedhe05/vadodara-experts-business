import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Name change affidavit in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional name change affidavit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/name-change-affidavit-vadodara" },
  openGraph: {
    title: "Name change affidavit in Vadodara | VadodaraExperts",
    description: "Professional name change affidavit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/name-change-affidavit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="name-change-affidavit-vadodara" />;
}
