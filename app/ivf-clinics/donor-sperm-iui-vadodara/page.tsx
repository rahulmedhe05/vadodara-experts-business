import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "donor sperm IUI in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional donor sperm iui services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/donor-sperm-iui-vadodara" },
  openGraph: {
    title: "donor sperm IUI in Vadodara | VadodaraExperts",
    description: "Professional donor sperm iui services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/donor-sperm-iui-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="donor-sperm-iui-vadodara" />;
}
