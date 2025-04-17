import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const MinecraftHeader = () => {
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  const [isOnline, setIsOnline] = useState<boolean>(true);
  
  // Симулируем получение данных о количестве игроков
  useEffect(() => {
    // В реальном приложении здесь был бы API-запрос к серверу
    const timer = setTimeout(() => {
      setPlayerCount(Math.floor(Math.random() * 100));
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <header className="w-full px-4 py-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="relative">
          <div className="w-16 h-16 bg-minecraft-green rounded-md pixelated flex items-center justify-center text-4xl font-bold border-2 border-black">
            M
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-pulse border border-black"></div>
        </div>
        <div className="ml-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white shadow-sm tracking-wide">
            MAXIMUM<span className="text-minecraft-green">WORLD</span>
          </h1>
          <div className="flex items-center mt-1">
            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
            <p className="text-sm text-gray-300">
              Статус: <span className="text-white">{isOnline ? 'Онлайн' : 'Оффлайн'}</span> 
              {playerCount !== null && ` • Игроков: ${playerCount}`}
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button className="minecraft-btn">
          ИГРАТЬ СЕЙЧАС
        </button>
        <button className="minecraft-btn bg-gray-700">
          ДИСКОРД
        </button>
      </div>
    </header>
  );
};

export default MinecraftHeader;