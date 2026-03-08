import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("3d-printing-services")!;

export const metadata: Metadata = {
  title: "3d Printing Services Guarantee in Vadodara | 3D Printing Services | VadodaraExperts",
  description: "Professional 3d printing services guarantee services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/3d-printing-services/3d-printing-services-guarantee-vadodara" },
  openGraph: {
    title: "3d Printing Services Guarantee in Vadodara | VadodaraExperts",
    description: "Professional 3d printing services guarantee services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/3d-printing-services/3d-printing-services-guarantee-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3d-printing-services-guarantee-vadodara" />;
}
