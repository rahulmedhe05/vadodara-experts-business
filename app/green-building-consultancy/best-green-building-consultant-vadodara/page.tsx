import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "best green building consultant in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional best green building consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/best-green-building-consultant-vadodara" },
  openGraph: {
    title: "best green building consultant in Vadodara | VadodaraExperts",
    description: "Professional best green building consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/best-green-building-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-green-building-consultant-vadodara" />;
}
