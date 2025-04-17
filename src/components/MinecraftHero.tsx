const MinecraftHero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Фоновый слой с затемнением */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide">
          ДОБРО ПОЖАЛОВАТЬ НА <span className="text-minecraft-green">MAXIMUMWORLD</span>
        </h2>
        
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Лучший Minecraft сервер с уникальными режимами игры, отзывчивой администрацией и дружелюбным сообществом.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-minecraft-green p-4 rounded-md border-2 border-black">
              <p className="text-xl font-bold">IP СЕРВЕРА</p>
              <p className="text-2xl font-bold">play.maximumworld.com</p>
            </div>
            <div className="mt-2 text-sm text-gray-300">
              Версия: 1.19.2 - 1.20.1
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <button className="minecraft-btn text-xl py-3 px-8 animate-float">
              НАЧАТЬ ИГРАТЬ СЕЙЧАС
            </button>
            <div className="mt-2 text-sm text-gray-300">
              Уже более 10,000 игроков
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративные блоки Minecraft (стилизованные) */}
      <div className="absolute -bottom-6 left-0 right-0 h-12 bg-minecraft-dirt z-20 border-t-2 border-black"></div>
      <div className="absolute -bottom-18 left-0 right-0 h-12 bg-minecraft-stone z-10"></div>
    </section>
  );
};

export default MinecraftHero;