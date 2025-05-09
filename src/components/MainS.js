"use client"
import React, { useState, useEffect } from "react";
import Card from "./Card";

function MainS(props) {
  const [cards, setCards] = useState(props.Data.products);
  const [currentCard, setCurrentCard] = useState("All Products");
  const [head, setHead] = useState("All Products");

  const handleBtns = (brand) => {
    setCurrentCard(brand);
    setHead(brand);
  };

  useEffect(() => {
    if (currentCard === "All Products") {
      setCards(props.Data.products);
    } else {
      const filtered = props.Data.products.filter((card) => {
        return card.brand === currentCard || card.brand.includes(currentCard);
      });
      setCards(filtered);
    }
  }, [currentCard]);

  return (
    <div id="Store">
      <div className="arrows">
        <p>
          <a href="/section" className="homss">
            Home
          </a>
          / products
        </p>
      </div>
      <div className="mainbar">
        <section class="products">
          <div className="hb">
            <h1>Browse by</h1>
          </div>
          <div className='subsill'>
            <ul>
              <li>
                <button className="fillbtn" onClick={() => handleBtns("All Products")} id="All Products">
                  All Products
                </button>
              </li>
              <li>
                <button className="fillbtn" onClick={() => handleBtns("BRIONI")} id="BRIONI">
                  BRIONI
                </button>
              </li>
              <li>
                <button className="fillbtn" onClick={() => handleBtns("TED BAKER")} id="TED BAKER">
                  TED BAKER
                </button>
              </li>
              <li>
                <button className="fillbtn"
                  onClick={() => handleBtns("BROOKS BROTHERS")}
                  id="BROOKS BROTHERS"
                >
                  BROOKS BROTHERS
                </button>
              </li>
              <li>
                <button className="fillbtn" onClick={() => handleBtns("BURBERRY")} id="BURBERRY">
                  BURBERRY
                </button>
              </li>
              <li>
                <button className="fillbtn"
                  onClick={() => handleBtns("GIORGIO ARMANI")}
                  id="GIORGIO ARMANI"
                >
                  GIORGIO ARMANI
                </button>
              </li>
              <li>
                <button className="fillbtn" onClick={() => handleBtns("TOM FORD")} id="TOM FORD">
                  TOM FORD
                </button>
              </li>
            </ul>
          </div>
        </section>
        <div className="product-list">
          <h1 className="noob">{head}</h1>
          <div className="filter">
            <p>All Products </p>
          </div>
          <div className="grid">
            {cards.map((items, index) => {
              return (
                <Card
                key={items.id}
                  title={items.name}
                  price={items.price}
                  image={items.img}
                  item={items}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainS;
