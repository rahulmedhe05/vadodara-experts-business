import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "varicocele treatment for fertility in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional varicocele treatment for fertility services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/varicocele-treatment-for-fertility-vadodara" },
  openGraph: {
    title: "varicocele treatment for fertility in Vadodara | VadodaraExperts",
    description: "Professional varicocele treatment for fertility services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/varicocele-treatment-for-fertility-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="varicocele-treatment-for-fertility-vadodara" />;
}
