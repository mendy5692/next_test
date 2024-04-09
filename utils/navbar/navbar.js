"use client";
import { usePathname } from "next/navigation";
import { items } from "./data/items";
import "./navbar.css";
import { nanoid } from "nanoid";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="nav-list">
      <ul className="navbar-item-list">
        {items.map((list_item) => (
          <Navitem
            key={nanoid()}
            item={{ ...list_item, current: pathname === list_item.href }}
          />
        ))}
      </ul>
    </div>
  );
}

function Navitem({ item }) {
  return (
    <li>
      <a href={item.href} className={item.current ? "current" : undefined}>
        {item.title}
      </a>
    </li>
  );
}
