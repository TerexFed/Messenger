import More from "../../../../assets/mainfieldheaderIcons/more";
import Search from "../../../../assets/mainfieldheaderIcons/search";
import style from "./mainFieldHeader.module.css";

function MainFieldHeader({ user }) {
  return (
    <div className={style.mainFieldHeader}>
      <div className={style.companionInfo}>
        <p>{user}</p>
        <sup>online</sup>
      </div>
      <div className={style.functions}>
        <Search />
        <More />
      </div>
    </div>
  );
}

export default MainFieldHeader;
