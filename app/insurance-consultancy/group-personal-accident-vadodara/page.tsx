import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Group personal accident in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional group personal accident services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/group-personal-accident-vadodara" },
  openGraph: {
    title: "Group personal accident in Vadodara | VadodaraExperts",
    description: "Professional group personal accident services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/group-personal-accident-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="group-personal-accident-vadodara" />;
}
