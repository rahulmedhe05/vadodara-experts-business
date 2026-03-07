import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Marble templating in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional marble templating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/marble-templating-vadodara" },
  openGraph: {
    title: "Marble templating in Vadodara | VadodaraExperts",
    description: "Professional marble templating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/marble-templating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marble-templating-vadodara" />;
}
