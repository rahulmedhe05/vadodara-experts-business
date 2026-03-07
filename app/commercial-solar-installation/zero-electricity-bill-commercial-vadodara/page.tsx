import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "zero electricity bill commercial in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional zero electricity bill commercial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/zero-electricity-bill-commercial-vadodara" },
  openGraph: {
    title: "zero electricity bill commercial in Vadodara | VadodaraExperts",
    description: "Professional zero electricity bill commercial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/zero-electricity-bill-commercial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="zero-electricity-bill-commercial-vadodara" />;
}
