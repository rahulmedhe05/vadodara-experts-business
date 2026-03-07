import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "light duty conveyor in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional light duty conveyor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/light-duty-conveyor-vadodara" },
  openGraph: {
    title: "light duty conveyor in Vadodara | VadodaraExperts",
    description: "Professional light duty conveyor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/light-duty-conveyor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="light-duty-conveyor-vadodara" />;
}
