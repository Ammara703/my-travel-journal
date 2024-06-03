// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import data from "./data.jsx";
import Header from "./Components/Header.jsx";
import Card from "./Components/Card.jsx";
import Footer from "./Components/Footer.jsx";
import "./index.css";

function App() {
  // const [count, setCount] = useState(0);
  const card = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  });
  return (
    <div>
      <Header />
      {card}
      <Footer />
    </div>
  );
}

export default App;
