import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "assisted reproduction in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional assisted reproduction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/assisted-reproduction-vadodara" },
  openGraph: {
    title: "assisted reproduction in Vadodara | VadodaraExperts",
    description: "Professional assisted reproduction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/assisted-reproduction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="assisted-reproduction-vadodara" />;
}
