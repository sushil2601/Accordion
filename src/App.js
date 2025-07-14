import Accordion from "./components/Accordion";
import "./styles.css";

export default function App() {
  const items = [
    {
      titles: "JavaScript Basics",
      content: "Learn Variable, function, and loops in JavaScript",
    },
    {
      titles: "React.js Overview",
      content: "Understand components, state, and props in React",
    },
    {
      titles: "Node.js",
      content: "Basics of server-side development with Node.js",
    },
    {
      titles: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js",
    },
  ];

  return (
    <div className="App">
      <h1>Accordion</h1>
      <Accordion items={items} />
    </div>
  );
}
