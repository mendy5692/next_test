"use client";
import { useState } from "react";
import "../../app/globals.css";
import "./adminRegister.css";

export default function AdminReg() {
  const [page, setpage] = useState("");
  return (
    <div className="admin-reg-container column">
      <select
        className="select"
        onChange={(e) => {
          console.log(`coich: ${e.target.value}`);
          setpage(e.target.value);
        }}
        defaultValue={"art"}
      >
        <option value="art">art</option>
        <option value="decorations">decorations</option>
        <option value="judaica">judaica</option>
      </select>
      <form
        className="admin-reg-form column"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`page: ${page}`);
          
        }}
      >
        <input name="title" type="text" placeholder="name..." min={2}></input>
        <input
          name="manufacturer"
          type="text"
          placeholder="manu facturer..."
          min={2}
        ></input>
        <input
          name="desc"
          type="text"
          placeholder="description..."
          min={2}
        ></input>
        <input
          name="img_url"
          type="text"
          placeholder="uploud image..."
          min={2}
        ></input>
        <input
          name="price"
          type="number"
          placeholder="price..."
          min={1}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
