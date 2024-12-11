import Head from "next/head";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>SUGAR</title>
        <meta name="description" content="A portfolio showcasing my work." />
      </Head>
      <div className="relative min-h-screen bg-white">
        <Hero />
      </div>
    </>
  );
}
