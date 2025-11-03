import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
