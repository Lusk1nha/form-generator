import { Section } from "./Section/Section";

function ElementsMenu() {
  return (
    <section className="bg-primary h-full flex-1">
      <div className="border-line border-y py-2 px-4">Arraste os elementos</div>

      <div className="flex flex-col gap-x-2">
        <Section name="Elementos de Tela" />
      </div>
    </section>
  );
}

export { ElementsMenu };
