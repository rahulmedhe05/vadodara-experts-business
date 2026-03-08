import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Post construction pest control in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional post construction pest control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/post-construction-pest-control-vadodara" },
  openGraph: {
    title: "Post construction pest control in Vadodara | VadodaraExperts",
    description: "Professional post construction pest control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/post-construction-pest-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="post-construction-pest-control-vadodara" />;
}
