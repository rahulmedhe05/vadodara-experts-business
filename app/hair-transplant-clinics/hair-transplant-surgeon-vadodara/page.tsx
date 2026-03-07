import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Hair transplant surgeon in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional hair transplant surgeon services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/hair-transplant-surgeon-vadodara" },
  openGraph: {
    title: "Hair transplant surgeon in Vadodara | VadodaraExperts",
    description: "Professional hair transplant surgeon services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/hair-transplant-surgeon-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hair-transplant-surgeon-vadodara" />;
}
