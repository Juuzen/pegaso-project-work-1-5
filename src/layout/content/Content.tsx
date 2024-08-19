import { Outlet } from "react-router-dom";
import style from "./Content.module.scss";

export const Content = () => {
  return (
    <div className={style.contentContainer}>
      <Outlet />
    </div>
  );
};
