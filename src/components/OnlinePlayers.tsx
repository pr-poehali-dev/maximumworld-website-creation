import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

type Player = {
  id: number;
  name: string;
  level: number;
  rank: string;
  joinDate: string;
};

const samplePlayers: Player[] = [
  { id: 1, name: "Diamond_Miner", level: 56, rank: "VIP", joinDate: "2023-01-15" },
  { id: 2, name: "CreeperSlayer", level: 42, rank: "Admin", joinDate: "2022-05-20" },
  { id: 3, name: "EnderDragon", level: 89, rank: "Premium", joinDate: "2023-04-07" },
];

const OnlinePlayers = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [maxPlayers, setMaxPlayers] = useState(100);
  const [currentPlayers, setCurrentPlayers] = useState(0);
  
  useEffect(() => {
    // Здесь бы был запрос к API сервера
    // Симулируем загрузку данных
    setTimeout(() => {
      setPlayers(samplePlayers);
      setCurrentPlayers(samplePlayers.length);
    }, 1000);
  }, []);
  
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">СТАТИСТИКА СЕРВЕРА</h2>
        
        <Card className="bg-muted border-2 border-black">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white">Игроков онлайн:</span>
              <span className="text-minecraft-green font-bold">{currentPlayers}/{maxPlayers}</span>
            </div>
            <Progress value={(currentPlayers / maxPlayers) * 100} className="h-4 bg-gray-700" 
              indicatorClassName="bg-minecraft-green" />
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-white">Топ игроки онлайн:</h3>
              <div className="grid grid-cols-1 gap-4">
                {players.length > 0 ? (
                  players.map((player) => (
                    <div key={player.id} className="flex items-center bg-minecraft-darkgray p-3 rounded-md border border-gray-700">
                      <div className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center text-lg font-bold">
                        {player.name.charAt(0)}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <span className="font-bold text-white">{player.name}</span>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            player.rank === "Admin" ? "bg-red-500" : 
                            player.rank === "VIP" ? "bg-blue-500" : "bg-yellow-500"
                          }`}>
                            {player.rank}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400">Уровень: {player.level}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center">Загрузка данных...</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OnlinePlayers;