import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Canteen mosquito net in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional canteen mosquito net services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/canteen-mosquito-net-vadodara" },
  openGraph: {
    title: "Canteen mosquito net in Vadodara | VadodaraExperts",
    description: "Professional canteen mosquito net services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/canteen-mosquito-net-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="canteen-mosquito-net-vadodara" />;
}
