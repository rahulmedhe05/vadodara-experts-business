import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Anti glare glasses in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional anti glare glasses services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/anti-glare-glasses-vadodara" },
  openGraph: {
    title: "Anti glare glasses in Vadodara | VadodaraExperts",
    description: "Professional anti glare glasses services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/anti-glare-glasses-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-glare-glasses-vadodara" />;
}
