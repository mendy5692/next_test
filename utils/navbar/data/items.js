import MarkunreadIcon from "@mui/icons-material/Markunread";
import { GiCandleHolder } from "react-icons/gi";
import CategoryIcon from "@mui/icons-material/Category";
import { GrUserAdmin } from "react-icons/gr";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PaletteSharpIcon from "@mui/icons-material/PaletteSharp";
import "../navbar.css";

export const items = [
  {
    title: (
      <div className="row">
        <p>Home</p>
        <p className="icon_inline">
          <HomeSharpIcon />
        </p>
      </div>
    ),
    href: "/",
  },
  {
    title: (
      <div className="row">
        <p>Art</p>
        <p className="icon_inline">
          <PaletteSharpIcon />
        </p>
      </div>
    ),
    href: "/art",
  },
  {
    title: (
      <div className="row">
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
      <div className="row">
        <p>Decorations</p>
        <p className="icon_inline">
          <CategoryIcon />
        </p>
      </div>
    ),
    href: "/decorations",
  },
  {
    title: (
      <div className="row">
        <p>Contact</p>
        <p className="icon_inline">
          <MarkunreadIcon />
        </p>
      </div>
    ),
    href: "/contact",
  },
  {
    title: (
      <div className="row">
        <p>Admin</p>
        <p className="icon_inline">
          <GrUserAdmin />
        </p>
      </div>
    ),
    href: "/admin",
  },
];
