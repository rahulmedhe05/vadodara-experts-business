import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "online study abroad consultation in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional online study abroad consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/online-study-abroad-consultation-vadodara" },
  openGraph: {
    title: "online study abroad consultation in Vadodara | VadodaraExperts",
    description: "Professional online study abroad consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/online-study-abroad-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="online-study-abroad-consultation-vadodara" />;
}
