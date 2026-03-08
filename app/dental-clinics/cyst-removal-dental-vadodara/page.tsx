import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Cyst removal dental in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional cyst removal dental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/cyst-removal-dental-vadodara" },
  openGraph: {
    title: "Cyst removal dental in Vadodara | VadodaraExperts",
    description: "Professional cyst removal dental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/cyst-removal-dental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cyst-removal-dental-vadodara" />;
}
