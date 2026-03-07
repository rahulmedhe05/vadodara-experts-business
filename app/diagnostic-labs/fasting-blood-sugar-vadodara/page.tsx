import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Fasting blood sugar in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional fasting blood sugar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/fasting-blood-sugar-vadodara" },
  openGraph: {
    title: "Fasting blood sugar in Vadodara | VadodaraExperts",
    description: "Professional fasting blood sugar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/fasting-blood-sugar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fasting-blood-sugar-vadodara" />;
}
