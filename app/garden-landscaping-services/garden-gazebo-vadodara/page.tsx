import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Garden gazebo in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional garden gazebo services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/garden-gazebo-vadodara" },
  openGraph: {
    title: "Garden gazebo in Vadodara | VadodaraExperts",
    description: "Professional garden gazebo services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/garden-gazebo-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="garden-gazebo-vadodara" />;
}
