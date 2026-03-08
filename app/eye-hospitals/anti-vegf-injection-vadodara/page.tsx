import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Anti VEGF injection in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional anti vegf injection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/anti-vegf-injection-vadodara" },
  openGraph: {
    title: "Anti VEGF injection in Vadodara | VadodaraExperts",
    description: "Professional anti vegf injection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/anti-vegf-injection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-vegf-injection-vadodara" />;
}
