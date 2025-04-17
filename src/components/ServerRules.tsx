import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldAlert } from "lucide-react";

const rules = [
  {
    title: "Уважение к игрокам",
    content: "Запрещены любые формы оскорблений, травли, дискриминации или токсичного поведения по отношению к другим игрокам."
  },
  {
    title: "Читы и сторонние программы",
    content: "Запрещено использование читов, хаков, эксплойтов и любых других программ, дающих нечестное преимущество."
  },
  {
    title: "Гриферство",
    content: "Запрещено разрушение чужих построек и воровство ресурсов у других игроков вне специальных PvP зон."
  }
];

const ServerRules = () => {
  return (
    <section className="py-12 px-4 bg-muted bg-opacity-80">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <ShieldAlert className="h-8 w-8 text-red-500 mr-2" />
          <h2 className="text-3xl font-bold text-white">ПРАВИЛА СЕРВЕРА</h2>
        </div>
        
        <Accordion type="single" collapsible className="bg-minecraft-darkgray border-2 border-black p-4 rounded-md">
          {rules.map((rule, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700 last:border-0">
              <AccordionTrigger className="text-white text-lg py-4 hover:text-minecraft-green transition-colors">
                {rule.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                {rule.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-6 text-center text-gray-300">
          <p>Полный список правил доступен на нашем Discord-сервере</p>
          <button className="minecraft-btn mt-4 bg-indigo-600">ПРИСОЕДИНИТЬСЯ К ДИСКОРДУ</button>
        </div>
      </div>
    </section>
  );
};

export default ServerRules;