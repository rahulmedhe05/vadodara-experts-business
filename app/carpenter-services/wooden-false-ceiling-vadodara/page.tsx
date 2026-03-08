import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Wooden false ceiling in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional wooden false ceiling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/wooden-false-ceiling-vadodara" },
  openGraph: {
    title: "Wooden false ceiling in Vadodara | VadodaraExperts",
    description: "Professional wooden false ceiling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/wooden-false-ceiling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wooden-false-ceiling-vadodara" />;
}
