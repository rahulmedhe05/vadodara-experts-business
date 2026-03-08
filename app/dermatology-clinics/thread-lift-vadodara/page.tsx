import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Thread lift in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional thread lift services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/thread-lift-vadodara" },
  openGraph: {
    title: "Thread lift in Vadodara | VadodaraExperts",
    description: "Professional thread lift services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/thread-lift-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="thread-lift-vadodara" />;
}
