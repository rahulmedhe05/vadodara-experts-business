import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "follicular monitoring in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional follicular monitoring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/follicular-monitoring-vadodara" },
  openGraph: {
    title: "follicular monitoring in Vadodara | VadodaraExperts",
    description: "Professional follicular monitoring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/follicular-monitoring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="follicular-monitoring-vadodara" />;
}
