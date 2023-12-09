import { ElementsMenu } from "./components/ElementsMenu/ElementsMenu";
import { Form } from "./components/Form/Form";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <div className="w-full h-full bg-white text-primaryText flex flex-col">
      <header>
        <Menu />
      </header>

      <main className="flex h-full">
        <div className="bg-white w-full flex justify-center p-5 px-[64px] flex-1">
          <Form />
        </div>

        <aside className="flex-[0.4]">
          <ElementsMenu />
        </aside>
      </main>
    </div>
  );
}

export default App;
