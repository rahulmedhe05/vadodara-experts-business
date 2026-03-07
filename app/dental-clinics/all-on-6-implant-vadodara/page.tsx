import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "All on 6 implant in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional all on 6 implant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/all-on-6-implant-vadodara" },
  openGraph: {
    title: "All on 6 implant in Vadodara | VadodaraExperts",
    description: "Professional all on 6 implant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/all-on-6-implant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="all-on-6-implant-vadodara" />;
}
