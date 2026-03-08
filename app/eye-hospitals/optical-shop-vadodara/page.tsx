import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Optical shop in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional optical shop services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/optical-shop-vadodara" },
  openGraph: {
    title: "Optical shop in Vadodara | VadodaraExperts",
    description: "Professional optical shop services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/optical-shop-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="optical-shop-vadodara" />;
}
