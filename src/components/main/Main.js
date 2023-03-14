import { Card, Button } from "@chakra-ui/react";
import "./Main.css";

function Main() {
  return (
    <>
      <main>
        <div className="main-section">
          <div className="specials-banner">
            <h2 className="specials-title">This week specials!</h2>
            <Button>Online Menu</Button>
          </div>
          <div className="specials-cards-container">
            <Card />
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;