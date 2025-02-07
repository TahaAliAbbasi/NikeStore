import dynamic from "next/dynamic";

const Homemain = dynamic(() => import("./components/Homemain"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full mx-auto px-4">
      <Homemain />
    </main>
  );
}
