import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Double bed mosquito net in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional double bed mosquito net services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/double-bed-mosquito-net-vadodara" },
  openGraph: {
    title: "Double bed mosquito net in Vadodara | VadodaraExperts",
    description: "Professional double bed mosquito net services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/double-bed-mosquito-net-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="double-bed-mosquito-net-vadodara" />;
}
