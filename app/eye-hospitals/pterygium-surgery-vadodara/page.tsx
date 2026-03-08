import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Pterygium surgery in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional pterygium surgery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/pterygium-surgery-vadodara" },
  openGraph: {
    title: "Pterygium surgery in Vadodara | VadodaraExperts",
    description: "Professional pterygium surgery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/pterygium-surgery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pterygium-surgery-vadodara" />;
}
