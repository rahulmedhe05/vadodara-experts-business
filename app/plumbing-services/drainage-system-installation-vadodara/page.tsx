import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Drainage system installation in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional drainage system installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/drainage-system-installation-vadodara" },
  openGraph: {
    title: "Drainage system installation in Vadodara | VadodaraExperts",
    description: "Professional drainage system installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/drainage-system-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drainage-system-installation-vadodara" />;
}
