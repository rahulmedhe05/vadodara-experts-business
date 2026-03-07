import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Advanced baldness treatment in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional advanced baldness treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/advanced-baldness-treatment-vadodara" },
  openGraph: {
    title: "Advanced baldness treatment in Vadodara | VadodaraExperts",
    description: "Professional advanced baldness treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/advanced-baldness-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="advanced-baldness-treatment-vadodara" />;
}
