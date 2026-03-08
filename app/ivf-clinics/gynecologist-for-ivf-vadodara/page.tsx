import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "gynecologist for IVF in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional gynecologist for ivf services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/gynecologist-for-ivf-vadodara" },
  openGraph: {
    title: "gynecologist for IVF in Vadodara | VadodaraExperts",
    description: "Professional gynecologist for ivf services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/gynecologist-for-ivf-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gynecologist-for-ivf-vadodara" />;
}
