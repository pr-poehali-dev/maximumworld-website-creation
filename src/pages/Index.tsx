import MinecraftHeader from "@/components/MinecraftHeader";
import MinecraftHero from "@/components/MinecraftHero";
import ServerFeatures from "@/components/ServerFeatures";
import OnlinePlayers from "@/components/OnlinePlayers";
import ServerRules from "@/components/ServerRules";
import MinecraftFooter from "@/components/MinecraftFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MinecraftHeader />
      <main className="flex-grow">
        <MinecraftHero />
        <ServerFeatures />
        <OnlinePlayers />
        <ServerRules />
      </main>
      <MinecraftFooter />
    </div>
  );
};

export default Index;