import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Scalp micropigmentation in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional scalp micropigmentation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/scalp-micropigmentation-vadodara" },
  openGraph: {
    title: "Scalp micropigmentation in Vadodara | VadodaraExperts",
    description: "Professional scalp micropigmentation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/scalp-micropigmentation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scalp-micropigmentation-vadodara" />;
}
