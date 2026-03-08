import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Lazy eye treatment in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional lazy eye treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/lazy-eye-treatment-vadodara" },
  openGraph: {
    title: "Lazy eye treatment in Vadodara | VadodaraExperts",
    description: "Professional lazy eye treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/lazy-eye-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lazy-eye-treatment-vadodara" />;
}
