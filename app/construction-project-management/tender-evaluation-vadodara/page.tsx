import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "tender evaluation in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional tender evaluation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/tender-evaluation-vadodara" },
  openGraph: {
    title: "tender evaluation in Vadodara | VadodaraExperts",
    description: "Professional tender evaluation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/tender-evaluation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tender-evaluation-vadodara" />;
}
