const MinecraftFooter = () => {
  return (
    <footer className="bg-minecraft-darkgray border-t-2 border-minecraft-green py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">MAXIMUMWORLD</h3>
            <p className="text-gray-300">
              Лучший Minecraft сервер с уникальными режимами и дружелюбным сообществом.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">КОНТАКТЫ</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Discord: discord.gg/maximumworld</li>
              <li>Email: admin@maximumworld.com</li>
              <li>Техподдержка: support@maximumworld.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">ПОЛЕЗНЫЕ ССЫЛКИ</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-minecraft-green">Правила сервера</a></li>
              <li><a href="#" className="hover:text-minecraft-green">VIP привилегии</a></li>
              <li><a href="#" className="hover:text-minecraft-green">Донат</a></li>
              <li><a href="#" className="hover:text-minecraft-green">Карта сервера</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>© 2023 MAXIMUMWORLD. Все права защищены.</p>
          <p className="mt-2">Minecraft является торговой маркой Mojang AB. Мы не связаны с Mojang AB.</p>
        </div>
      </div>
    </footer>
  );
};

export default MinecraftFooter;