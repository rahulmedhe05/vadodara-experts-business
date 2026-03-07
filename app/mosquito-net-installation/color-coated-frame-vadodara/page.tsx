import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Color coated frame in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional color coated frame services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/color-coated-frame-vadodara" },
  openGraph: {
    title: "Color coated frame in Vadodara | VadodaraExperts",
    description: "Professional color coated frame services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/color-coated-frame-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="color-coated-frame-vadodara" />;
}
