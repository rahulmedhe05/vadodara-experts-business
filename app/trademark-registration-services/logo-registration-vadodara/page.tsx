import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Logo registration in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional logo registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/logo-registration-vadodara" },
  openGraph: {
    title: "Logo registration in Vadodara | VadodaraExperts",
    description: "Professional logo registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/logo-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="logo-registration-vadodara" />;
}
