import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "stamp duty calculation in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional stamp duty calculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/stamp-duty-calculation-vadodara" },
  openGraph: {
    title: "stamp duty calculation in Vadodara | VadodaraExperts",
    description: "Professional stamp duty calculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/stamp-duty-calculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stamp-duty-calculation-vadodara" />;
}
