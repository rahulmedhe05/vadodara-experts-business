import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Pressure pump installation in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional pressure pump installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/pressure-pump-installation-vadodara" },
  openGraph: {
    title: "Pressure pump installation in Vadodara | VadodaraExperts",
    description: "Professional pressure pump installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/pressure-pump-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pressure-pump-installation-vadodara" />;
}
