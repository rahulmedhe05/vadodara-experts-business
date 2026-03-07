import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Free termite inspection in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional free termite inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/free-termite-inspection-vadodara" },
  openGraph: {
    title: "Free termite inspection in Vadodara | VadodaraExperts",
    description: "Professional free termite inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/free-termite-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="free-termite-inspection-vadodara" />;
}
