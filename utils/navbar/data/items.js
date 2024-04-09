import { IoMdHome } from "react-icons/io";
import { IoColorPaletteSharp } from "react-icons/io5";
import { GiCandleHolder } from "react-icons/gi";
import { MdCategory } from "react-icons/md";
import { MdMarkunread } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import "../navbar.css";

export const items = [
  {
    title: (
      <div className="disply_nav_item">
        <p>Home</p>
        <p className="icon_inline">
          <IoMdHome />
        </p>
      </div>
    ),
    href: "/",
  },
  {
    title: (
      <div className="disply_nav_item">
        <p>Art</p>
        <p className="icon_inline">
          <IoColorPaletteSharp />
        </p>
      </div>
    ),
    href: "/art",
  },
  {
    title: (
      <div className="disply_nav_item">
        <p>Judaica</p>
        <p className="icon_inline">
          <GiCandleHolder />
        </p>
      </div>
    ),
    href: "/judaica",
  },
  {
    title: (
      <div className="disply_nav_item">
        <p>Decorations</p>
        <p className="icon_inline">
          <MdCategory />
        </p>
      </div>
    ),
    href: "/decorations",
  },
  {
    title: (
      <div className="disply_nav_item">
        <p>Contact</p>
        <p className="icon_inline">
          <MdMarkunread />
        </p>
      </div>
    ),
    href: "/contact",
  },
  {
    title: (
      <div className="disply_nav_item">
        <p>admin</p>
        <p className="icon_inline">
          <GrUserAdmin />
        </p>
      </div>
    ),
    href: "/admin",
  },
];
