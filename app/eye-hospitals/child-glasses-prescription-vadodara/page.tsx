import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Child glasses prescription in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional child glasses prescription services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/child-glasses-prescription-vadodara" },
  openGraph: {
    title: "Child glasses prescription in Vadodara | VadodaraExperts",
    description: "Professional child glasses prescription services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/child-glasses-prescription-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="child-glasses-prescription-vadodara" />;
}
