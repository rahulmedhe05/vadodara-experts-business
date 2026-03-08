import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("3d-printing-services")!;

export const metadata: Metadata = {
  title: "3d Printing Services For Residential in Vadodara | 3D Printing Services | VadodaraExperts",
  description: "Professional 3d printing services for residential services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/3d-printing-services/3d-printing-services-for-residential-vadodara" },
  openGraph: {
    title: "3d Printing Services For Residential in Vadodara | VadodaraExperts",
    description: "Professional 3d printing services for residential services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/3d-printing-services/3d-printing-services-for-residential-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3d-printing-services-for-residential-vadodara" />;
}
