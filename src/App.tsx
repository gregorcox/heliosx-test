import { Consultation, Footer, Header } from "./components";

function App() {
  return (
    <div className="flex flex-col min-h-lvh">
      <Header />

      <main className="flex-1">
        <Consultation />
      </main>

      <Footer />
    </div>
  );
}

export default App;
