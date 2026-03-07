import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "post study work visa in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional post study work visa services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/post-study-work-visa-vadodara" },
  openGraph: {
    title: "post study work visa in Vadodara | VadodaraExperts",
    description: "Professional post study work visa services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/post-study-work-visa-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="post-study-work-visa-vadodara" />;
}
