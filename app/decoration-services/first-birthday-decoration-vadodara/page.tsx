import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "First birthday decoration in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional first birthday decoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/first-birthday-decoration-vadodara" },
  openGraph: {
    title: "First birthday decoration in Vadodara | VadodaraExperts",
    description: "Professional first birthday decoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/first-birthday-decoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="first-birthday-decoration-vadodara" />;
}
