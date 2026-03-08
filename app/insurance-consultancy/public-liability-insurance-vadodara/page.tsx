import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Public liability insurance in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional public liability insurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/public-liability-insurance-vadodara" },
  openGraph: {
    title: "Public liability insurance in Vadodara | VadodaraExperts",
    description: "Professional public liability insurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/public-liability-insurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="public-liability-insurance-vadodara" />;
}
