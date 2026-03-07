import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "ENT clinic interior in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional ent clinic interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/ent-clinic-interior-vadodara" },
  openGraph: {
    title: "ENT clinic interior in Vadodara | VadodaraExperts",
    description: "Professional ent clinic interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/ent-clinic-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ent-clinic-interior-vadodara" />;
}
