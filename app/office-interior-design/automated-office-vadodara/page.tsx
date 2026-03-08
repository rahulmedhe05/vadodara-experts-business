import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "automated office in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional automated office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/automated-office-vadodara" },
  openGraph: {
    title: "automated office in Vadodara | VadodaraExperts",
    description: "Professional automated office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/automated-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automated-office-vadodara" />;
}
