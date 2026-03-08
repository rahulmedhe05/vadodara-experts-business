import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Dry eye treatment in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional dry eye treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/dry-eye-treatment-vadodara" },
  openGraph: {
    title: "Dry eye treatment in Vadodara | VadodaraExperts",
    description: "Professional dry eye treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/dry-eye-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dry-eye-treatment-vadodara" />;
}
