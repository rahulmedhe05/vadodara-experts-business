import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "vinyl flooring office in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional vinyl flooring office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/vinyl-flooring-office-vadodara" },
  openGraph: {
    title: "vinyl flooring office in Vadodara | VadodaraExperts",
    description: "Professional vinyl flooring office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/vinyl-flooring-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vinyl-flooring-office-vadodara" />;
}
