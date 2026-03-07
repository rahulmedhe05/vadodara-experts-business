import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Macular degeneration treatment in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional macular degeneration treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/macular-degeneration-treatment-vadodara" },
  openGraph: {
    title: "Macular degeneration treatment in Vadodara | VadodaraExperts",
    description: "Professional macular degeneration treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/macular-degeneration-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="macular-degeneration-treatment-vadodara" />;
}
