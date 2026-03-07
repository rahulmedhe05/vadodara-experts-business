import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Group mediclaim in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional group mediclaim services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/group-mediclaim-vadodara" },
  openGraph: {
    title: "Group mediclaim in Vadodara | VadodaraExperts",
    description: "Professional group mediclaim services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/group-mediclaim-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="group-mediclaim-vadodara" />;
}
