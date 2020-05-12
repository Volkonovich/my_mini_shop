import React from "react";
import css from "./Category.module.css";

const Category = () => {
  return (
    <div className={css.Category}>
      <ul className={css.CategoryList}>
        <li className={css.ListItem}>
          <a href="#" className={css.bed} />
          <p>Кровати и спальни</p>
        </li>

        <li className={css.ListItem}>
          <a href="#" className={css.table} />
          <p>Столы и стулья</p>
        </li>

        <li className={css.ListItem}>
          <a href="#" className={css.bathroom} />
          <p>Мебель для ванной</p>
        </li>

        <li className={css.ListItem}>
          <a href="#" className={css.kitchen} />
          <p>Кухня</p>
        </li>
      </ul>
    </div>
  );
};

export default Category;
