import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Benefits from "./component/Benefits";
import TaskManager from "./component/TaskManager";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <TaskManager />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
