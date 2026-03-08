import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "modular workstation in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional modular workstation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/modular-workstation-vadodara" },
  openGraph: {
    title: "modular workstation in Vadodara | VadodaraExperts",
    description: "Professional modular workstation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/modular-workstation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-workstation-vadodara" />;
}
