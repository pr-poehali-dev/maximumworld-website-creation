import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sword, Users, Trophy, Rocket } from "lucide-react";

const features = [
  {
    title: "PvP Арены",
    description: "Соревнуйтесь с другими игроками на специальных PvP аренах с различными режимами",
    icon: <Sword className="h-8 w-8 text-minecraft-green" />,
  },
  {
    title: "Сильное сообщество",
    description: "Присоединяйтесь к дружелюбному сообществу игроков со всего мира",
    icon: <Users className="h-8 w-8 text-minecraft-green" />,
  },
  {
    title: "События и турниры",
    description: "Регулярные события и турниры с ценными призами для победителей",
    icon: <Trophy className="h-8 w-8 text-minecraft-green" />,
  },
];

const ServerFeatures = () => {
  return (
    <section className="py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-white">ОСОБЕННОСТИ СЕРВЕРА</h2>
        <div className="w-24 h-1 bg-minecraft-green mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="bg-muted border-2 border-black hover:border-minecraft-green transition-colors duration-300">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-2">{feature.icon}</div>
              <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-300">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block bg-muted p-6 rounded-lg border-2 border-black mb-8">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-8 w-8 text-minecraft-green mr-2" />
            <h3 className="text-2xl font-bold text-white">ЭКОНОМИКА И ВЫЖИВАНИЕ</h3>
          </div>
          <p className="text-gray-300 max-w-2xl">
            Наш сервер предлагает уникальный опыт выживания с развитой экономикой, 
            торговлей между игроками и множеством возможностей для заработка.
            Стройте свои дома, фермы и целые торговые империи!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServerFeatures;