import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Trademark conflict check in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional trademark conflict check services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/trademark-conflict-check-vadodara" },
  openGraph: {
    title: "Trademark conflict check in Vadodara | VadodaraExperts",
    description: "Professional trademark conflict check services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/trademark-conflict-check-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trademark-conflict-check-vadodara" />;
}
