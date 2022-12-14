import "./styles.css";
//import card1
import Card from "./components/Card";
import Card2 from "./components/Card2";
import cardsArr from "./data";

const cards = cardsArr.map((element, index) => {
  return (
    <Card
      key={index}
      {...element}
    />
  )
});


export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
        {/* <Card1 />
        <Card2 /> */}
      </section>
    </div>
  );
}