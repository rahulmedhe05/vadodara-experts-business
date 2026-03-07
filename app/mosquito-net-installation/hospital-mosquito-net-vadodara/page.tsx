import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Hospital mosquito net in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional hospital mosquito net services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/hospital-mosquito-net-vadodara" },
  openGraph: {
    title: "Hospital mosquito net in Vadodara | VadodaraExperts",
    description: "Professional hospital mosquito net services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/hospital-mosquito-net-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-mosquito-net-vadodara" />;
}
