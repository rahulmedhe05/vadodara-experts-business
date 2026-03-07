import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("container-house-construction")!;

export const metadata: Metadata = {
  title: "container hostel in Vadodara | Container House Construction | VadodaraExperts",
  description: "Professional container hostel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/container-house-construction/container-hostel-vadodara" },
  openGraph: {
    title: "container hostel in Vadodara | VadodaraExperts",
    description: "Professional container hostel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/container-house-construction/container-hostel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="container-hostel-vadodara" />;
}
