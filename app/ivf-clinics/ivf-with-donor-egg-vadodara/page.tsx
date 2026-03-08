import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "IVF with donor egg in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional ivf with donor egg services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/ivf-with-donor-egg-vadodara" },
  openGraph: {
    title: "IVF with donor egg in Vadodara | VadodaraExperts",
    description: "Professional ivf with donor egg services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/ivf-with-donor-egg-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ivf-with-donor-egg-vadodara" />;
}
