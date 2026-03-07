import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "egg donor in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional egg donor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/egg-donor-vadodara" },
  openGraph: {
    title: "egg donor in Vadodara | VadodaraExperts",
    description: "Professional egg donor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/egg-donor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="egg-donor-vadodara" />;
}
