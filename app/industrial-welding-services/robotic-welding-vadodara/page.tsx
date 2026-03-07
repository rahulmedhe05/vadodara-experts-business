import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "robotic welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional robotic welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/robotic-welding-vadodara" },
  openGraph: {
    title: "robotic welding in Vadodara | VadodaraExperts",
    description: "Professional robotic welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/robotic-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="robotic-welding-vadodara" />;
}
