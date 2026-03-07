import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Cicatricial alopecia treatment in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional cicatricial alopecia treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/cicatricial-alopecia-treatment-vadodara" },
  openGraph: {
    title: "Cicatricial alopecia treatment in Vadodara | VadodaraExperts",
    description: "Professional cicatricial alopecia treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/cicatricial-alopecia-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cicatricial-alopecia-treatment-vadodara" />;
}
