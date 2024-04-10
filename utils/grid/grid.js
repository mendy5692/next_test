"use client";
import { useState } from "react";
import "./grid.css";
import { nanoid } from "nanoid";
import Image from "next/image";
import { SortProducts } from "../sortProducts";
export default function Grid({ grid_items_list }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(0);

  const final_items_list = grid_items_list
    .filter((p) => p.title.includes(search))
    .sort((a, b) => SortProducts(a, b, sortBy))
    .map((item) => <GridItem key={nanoid()} item={item} />);
  return (
    <div className="grid-container">
      <div className="row-toolsBar">
        <div className="selectContainer row">
          <select
            class="select"
            onChange={(e) => setSortBy(parseInt(e.target.value))}
          >
            <option selected>Sort By:</option>
            <option value="0">name asc</option>
            <option value="1">name des</option>
            <option value="2">price asc</option>
            <option value="3">price des</option>
          </select>
        </div>

        <div class="textfildContainer">
          <input
            type="text"
            class="textfild"
            placeholder="Serch..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="grid">
        {final_items_list.length > 0 ? (
          final_items_list
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  );
}

function GridItem({ item }) {
  return (
    <div className="grid_item">
      <div className="myimg">
        <Image
          src={item.img_url}
          alt="img"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="mytext column">
        <h2>{item.price + "$"}</h2>
        <h3>{item.title}</h3>
        <h4>{item.desc}</h4>
      </div>
    </div>
  );
}
