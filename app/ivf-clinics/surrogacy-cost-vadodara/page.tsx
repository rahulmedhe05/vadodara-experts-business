import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "surrogacy cost in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional surrogacy cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/surrogacy-cost-vadodara" },
  openGraph: {
    title: "surrogacy cost in Vadodara | VadodaraExperts",
    description: "Professional surrogacy cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/surrogacy-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="surrogacy-cost-vadodara" />;
}
