import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Food processing unit insect screen in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional food processing unit insect screen services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/food-processing-unit-insect-screen-vadodara" },
  openGraph: {
    title: "Food processing unit insect screen in Vadodara | VadodaraExperts",
    description: "Professional food processing unit insect screen services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/food-processing-unit-insect-screen-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="food-processing-unit-insect-screen-vadodara" />;
}
