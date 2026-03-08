import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Face recognition access in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional face recognition access services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/face-recognition-access-vadodara" },
  openGraph: {
    title: "Face recognition access in Vadodara | VadodaraExperts",
    description: "Professional face recognition access services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/face-recognition-access-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="face-recognition-access-vadodara" />;
}
