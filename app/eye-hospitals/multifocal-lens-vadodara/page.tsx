import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Multifocal lens in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional multifocal lens services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/multifocal-lens-vadodara" },
  openGraph: {
    title: "Multifocal lens in Vadodara | VadodaraExperts",
    description: "Professional multifocal lens services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/multifocal-lens-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multifocal-lens-vadodara" />;
}
