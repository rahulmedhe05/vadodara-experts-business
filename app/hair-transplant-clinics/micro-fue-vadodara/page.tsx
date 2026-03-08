import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Micro FUE in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional micro fue services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/micro-fue-vadodara" },
  openGraph: {
    title: "Micro FUE in Vadodara | VadodaraExperts",
    description: "Professional micro fue services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/micro-fue-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="micro-fue-vadodara" />;
}
