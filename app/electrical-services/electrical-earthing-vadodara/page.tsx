import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Electrical earthing in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional electrical earthing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/electrical-earthing-vadodara" },
  openGraph: {
    title: "Electrical earthing in Vadodara | VadodaraExperts",
    description: "Professional electrical earthing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/electrical-earthing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrical-earthing-vadodara" />;
}
