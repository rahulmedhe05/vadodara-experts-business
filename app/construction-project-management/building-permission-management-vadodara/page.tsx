import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "building permission management in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional building permission management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/building-permission-management-vadodara" },
  openGraph: {
    title: "building permission management in Vadodara | VadodaraExperts",
    description: "Professional building permission management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/building-permission-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-permission-management-vadodara" />;
}
