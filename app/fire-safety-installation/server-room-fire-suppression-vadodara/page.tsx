import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "server room fire suppression in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional server room fire suppression services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/server-room-fire-suppression-vadodara" },
  openGraph: {
    title: "server room fire suppression in Vadodara | VadodaraExperts",
    description: "Professional server room fire suppression services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/server-room-fire-suppression-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="server-room-fire-suppression-vadodara" />;
}
