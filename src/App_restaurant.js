import React from "react";
import "./App.css";
import restaurant from "./restaurant.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <main>
      <section>
        <p>We serve the most {props.adjective} food around.</p>
        <img
          src={restaurant}
          height={200}
          alt="Napkin and fork at a restaurant table"
        />
        <ul style={{ textAlign: "left" }}>
          {props.dishes.map((dish) => (
            <li key={dish.id}>{dish.title}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishesArray = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Minestrone",
];

const dishObjects = dishesArray.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);

function App() {
  return (
    <div className="App">
      <Header name="Horacio" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;