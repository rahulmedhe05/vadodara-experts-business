import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "variable frequency drive in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional variable frequency drive services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/variable-frequency-drive-vadodara" },
  openGraph: {
    title: "variable frequency drive in Vadodara | VadodaraExperts",
    description: "Professional variable frequency drive services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/variable-frequency-drive-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="variable-frequency-drive-vadodara" />;
}
