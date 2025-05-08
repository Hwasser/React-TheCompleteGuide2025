import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
  // Random df=[0-0.999999]. Så högsta värde ifall max = 3 blir 3.99999 vilket vid floor ger 3.
}

export default function Header() {
  const randomIndex = getRandomInt(reactDescriptions.length);

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1 id="test">React Essentials</h1>
      <p>
        {reactDescriptions[randomIndex]} React concepts you will need for almost
        any app you are going to build!
      </p>
    </header>
  );
}