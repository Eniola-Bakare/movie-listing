import ContextProvider from "./_components/_Hooks/ContextProvider";
import HeroSection from "./_components/HeroSection";

export default async function Home() {
  return (
    <ContextProvider>
      <HeroSection />
    </ContextProvider>
  );
}
