import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "industrial solar with DG backup in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional industrial solar with dg backup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/industrial-solar-with-dg-backup-vadodara" },
  openGraph: {
    title: "industrial solar with DG backup in Vadodara | VadodaraExperts",
    description: "Professional industrial solar with dg backup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/industrial-solar-with-dg-backup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-solar-with-dg-backup-vadodara" />;
}
