import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Post import verification in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional post import verification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/post-import-verification-vadodara" },
  openGraph: {
    title: "Post import verification in Vadodara | VadodaraExperts",
    description: "Professional post import verification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/post-import-verification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="post-import-verification-vadodara" />;
}
