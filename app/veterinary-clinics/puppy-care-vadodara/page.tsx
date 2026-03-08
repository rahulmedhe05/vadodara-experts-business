import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "puppy care in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional puppy care services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/puppy-care-vadodara" },
  openGraph: {
    title: "puppy care in Vadodara | VadodaraExperts",
    description: "Professional puppy care services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/puppy-care-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="puppy-care-vadodara" />;
}
