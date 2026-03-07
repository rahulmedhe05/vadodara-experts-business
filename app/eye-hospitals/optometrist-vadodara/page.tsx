import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Optometrist in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional optometrist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/optometrist-vadodara" },
  openGraph: {
    title: "Optometrist in Vadodara | VadodaraExperts",
    description: "Professional optometrist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/optometrist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="optometrist-vadodara" />;
}
