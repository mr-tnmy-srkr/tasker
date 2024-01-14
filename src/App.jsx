import "./App.css"
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TaskBoard from "./task/TaskBoard";

export default function App() {
  return <div>
    <Header/>
    <Hero/>
    <TaskBoard/>
    <Footer/>
  </div>;
}
