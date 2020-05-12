import React from "react";
import css from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={css.mainHead}>
        <div className={css.wrapper}>
          <nav className={css.page}>
            <ul className={css.pegeList}>
              <li className={css.pegeListItem}>
                <a href="#" className={css.Home}></a>
              </li>
              <li className={css.pegeListItem}>
                <a href="#" className={css.elem}>
                  Контакты
                </a>
              </li>
              <li className={css.pegeListItem}>
                <a href="#" className="">
                  Доставка и оплата
                </a>
              </li>
              <li className={css.pegeListItem}>
                <a href="#" className="">
                  О нас!
                </a>
              </li>
            </ul>
            <a href="#" className={css.logo}>
              Casa Mia Mebel
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
