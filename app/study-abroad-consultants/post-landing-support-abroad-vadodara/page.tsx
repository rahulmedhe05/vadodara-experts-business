import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "post landing support abroad in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional post landing support abroad services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/post-landing-support-abroad-vadodara" },
  openGraph: {
    title: "post landing support abroad in Vadodara | VadodaraExperts",
    description: "Professional post landing support abroad services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/post-landing-support-abroad-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="post-landing-support-abroad-vadodara" />;
}
