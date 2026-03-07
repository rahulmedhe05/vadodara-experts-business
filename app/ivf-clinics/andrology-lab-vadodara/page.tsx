import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "andrology lab in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional andrology lab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/andrology-lab-vadodara" },
  openGraph: {
    title: "andrology lab in Vadodara | VadodaraExperts",
    description: "Professional andrology lab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/andrology-lab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="andrology-lab-vadodara" />;
}
