import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Housewarming catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional housewarming catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/housewarming-catering-vadodara" },
  openGraph: {
    title: "Housewarming catering in Vadodara | VadodaraExperts",
    description: "Professional housewarming catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/housewarming-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="housewarming-catering-vadodara" />;
}
