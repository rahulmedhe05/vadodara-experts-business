import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "distemper treatment in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional distemper treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/distemper-treatment-vadodara" },
  openGraph: {
    title: "distemper treatment in Vadodara | VadodaraExperts",
    description: "Professional distemper treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/distemper-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="distemper-treatment-vadodara" />;
}
