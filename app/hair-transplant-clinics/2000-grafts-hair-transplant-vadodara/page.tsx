import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "2000 grafts hair transplant in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional 2000 grafts hair transplant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/2000-grafts-hair-transplant-vadodara" },
  openGraph: {
    title: "2000 grafts hair transplant in Vadodara | VadodaraExperts",
    description: "Professional 2000 grafts hair transplant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/2000-grafts-hair-transplant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="2000-grafts-hair-transplant-vadodara" />;
}
