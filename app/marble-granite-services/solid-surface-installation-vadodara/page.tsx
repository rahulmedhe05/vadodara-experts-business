import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Solid surface installation in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional solid surface installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/solid-surface-installation-vadodara" },
  openGraph: {
    title: "Solid surface installation in Vadodara | VadodaraExperts",
    description: "Professional solid surface installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/solid-surface-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solid-surface-installation-vadodara" />;
}
