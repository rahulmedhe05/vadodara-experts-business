import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "cargo lashing in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional cargo lashing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/cargo-lashing-vadodara" },
  openGraph: {
    title: "cargo lashing in Vadodara | VadodaraExperts",
    description: "Professional cargo lashing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/cargo-lashing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cargo-lashing-vadodara" />;
}
