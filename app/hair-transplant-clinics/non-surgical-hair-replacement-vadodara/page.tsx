import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Non surgical hair replacement in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional non surgical hair replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/non-surgical-hair-replacement-vadodara" },
  openGraph: {
    title: "Non surgical hair replacement in Vadodara | VadodaraExperts",
    description: "Professional non surgical hair replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/non-surgical-hair-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="non-surgical-hair-replacement-vadodara" />;
}
