import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "No shave hair transplant in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional no shave hair transplant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/no-shave-hair-transplant-vadodara" },
  openGraph: {
    title: "No shave hair transplant in Vadodara | VadodaraExperts",
    description: "Professional no shave hair transplant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/no-shave-hair-transplant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="no-shave-hair-transplant-vadodara" />;
}
