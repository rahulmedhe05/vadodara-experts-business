import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Photo editing services in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional photo editing services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/photo-editing-services-vadodara" },
  openGraph: {
    title: "Photo editing services in Vadodara | VadodaraExperts",
    description: "Professional photo editing services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/photo-editing-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="photo-editing-services-vadodara" />;
}
