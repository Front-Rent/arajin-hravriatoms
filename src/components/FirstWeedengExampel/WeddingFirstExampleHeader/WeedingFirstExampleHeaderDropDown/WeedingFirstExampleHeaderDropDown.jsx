import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

import "./WeedingFirstExampleHeaderDropDown.scss";

const HeaderDropDawn = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <div className="weeding-first-example-drop-dawn">
      <AiOutlineMenu
        className="weeding-first-example-drop-dawn-burger-menu"
        onClick={() => setOpen(!open)}
      />
      <div
        className={`weeding-first-example-drop-dawn-menu ${
          open ? "active" : "inactive"
        } `}
      >
        <ul className="weeding-first-example-drop-dawn-menu-ul">
          <li>
            <Link
              to="glxavor"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleCloseMenu}
            >
              Գլխավոր
            </Link>
          </li>
          <li>
            <Link
              to="erbEvVortex"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleCloseMenu}
            >
              Երբ և որտեղ
            </Link>
          </li>
          <li>
            <Link
              to="hethasvark"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleCloseMenu}
            >
              Հետհաշվարկ
            </Link>
          </li>
          <li>
            <Link
              to="manramasner"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleCloseMenu}
            >
              Մանրամասներ
            </Link>
          </li>
          <li>
            <Link
              to="esHamadzaynEm"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleCloseMenu}
            >
              Ես Համաձայն եմ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderDropDawn;
