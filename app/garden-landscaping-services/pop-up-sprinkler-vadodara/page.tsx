import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Pop up sprinkler in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional pop up sprinkler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/pop-up-sprinkler-vadodara" },
  openGraph: {
    title: "Pop up sprinkler in Vadodara | VadodaraExperts",
    description: "Professional pop up sprinkler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/pop-up-sprinkler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pop-up-sprinkler-vadodara" />;
}
