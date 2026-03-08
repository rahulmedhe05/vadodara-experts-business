import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "preimplantation genetic diagnosis in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional preimplantation genetic diagnosis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/preimplantation-genetic-diagnosis-vadodara" },
  openGraph: {
    title: "preimplantation genetic diagnosis in Vadodara | VadodaraExperts",
    description: "Professional preimplantation genetic diagnosis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/preimplantation-genetic-diagnosis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="preimplantation-genetic-diagnosis-vadodara" />;
}
