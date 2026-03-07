import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "green building commissioning in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional green building commissioning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/green-building-commissioning-vadodara" },
  openGraph: {
    title: "green building commissioning in Vadodara | VadodaraExperts",
    description: "Professional green building commissioning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/green-building-commissioning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="green-building-commissioning-vadodara" />;
}
