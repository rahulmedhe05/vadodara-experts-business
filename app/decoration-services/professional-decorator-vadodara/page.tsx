import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Professional decorator in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional professional decorator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/professional-decorator-vadodara" },
  openGraph: {
    title: "Professional decorator in Vadodara | VadodaraExperts",
    description: "Professional professional decorator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/professional-decorator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="professional-decorator-vadodara" />;
}
