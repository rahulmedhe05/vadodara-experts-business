import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("3d-printing-services")!;

export const metadata: Metadata = {
  title: "Top 3d Printing Services in Vadodara | 3D Printing Services | VadodaraExperts",
  description: "Professional top 3d printing services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/3d-printing-services/top-3d-printing-services-vadodara" },
  openGraph: {
    title: "Top 3d Printing Services in Vadodara | VadodaraExperts",
    description: "Professional top 3d printing services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/3d-printing-services/top-3d-printing-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="top-3d-printing-services-vadodara" />;
}
