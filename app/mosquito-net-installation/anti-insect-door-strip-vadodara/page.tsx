import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Anti insect door strip in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional anti insect door strip services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/anti-insect-door-strip-vadodara" },
  openGraph: {
    title: "Anti insect door strip in Vadodara | VadodaraExperts",
    description: "Professional anti insect door strip services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/anti-insect-door-strip-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-insect-door-strip-vadodara" />;
}
