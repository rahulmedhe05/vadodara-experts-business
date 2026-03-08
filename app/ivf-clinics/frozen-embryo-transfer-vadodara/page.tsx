import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "frozen embryo transfer in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional frozen embryo transfer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/frozen-embryo-transfer-vadodara" },
  openGraph: {
    title: "frozen embryo transfer in Vadodara | VadodaraExperts",
    description: "Professional frozen embryo transfer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/frozen-embryo-transfer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="frozen-embryo-transfer-vadodara" />;
}
