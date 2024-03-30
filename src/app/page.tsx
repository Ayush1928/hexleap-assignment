import CollectionSpotlight from "@/components/CollectionSpotlight";
import Header from "@/components/Header";
import Sports from "@/components/Sports";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Header />
      <div className="lg:px-28 sm:px-20 [520px]:px-12 px-6 py-4 flex justify-center flex-col items-center">
        <Sports />
        <CollectionSpotlight />
      </div>
    </main>
  );
}
