import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "IEM registration in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional iem registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/iem-registration-vadodara" },
  openGraph: {
    title: "IEM registration in Vadodara | VadodaraExperts",
    description: "Professional iem registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/iem-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iem-registration-vadodara" />;
}
