import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Duty drawback in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional duty drawback services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/duty-drawback-vadodara" },
  openGraph: {
    title: "Duty drawback in Vadodara | VadodaraExperts",
    description: "Professional duty drawback services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/duty-drawback-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="duty-drawback-vadodara" />;
}
