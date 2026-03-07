import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Ant colony removal in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional ant colony removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/ant-colony-removal-vadodara" },
  openGraph: {
    title: "Ant colony removal in Vadodara | VadodaraExperts",
    description: "Professional ant colony removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/ant-colony-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ant-colony-removal-vadodara" />;
}
