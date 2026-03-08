import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "industrial PC in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional industrial pc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/industrial-pc-vadodara" },
  openGraph: {
    title: "industrial PC in Vadodara | VadodaraExperts",
    description: "Professional industrial pc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/industrial-pc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-pc-vadodara" />;
}
