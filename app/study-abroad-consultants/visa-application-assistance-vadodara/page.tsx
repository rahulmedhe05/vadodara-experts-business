import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "visa application assistance in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional visa application assistance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/visa-application-assistance-vadodara" },
  openGraph: {
    title: "visa application assistance in Vadodara | VadodaraExperts",
    description: "Professional visa application assistance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/visa-application-assistance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="visa-application-assistance-vadodara" />;
}
