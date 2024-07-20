import { useTranslation } from "react-i18next";
import EnFlag from "../../../assets/english.svg";
import ArmFlag from "../../../assets/armenian.svg";

const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string): void => {
    void i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end items-center py-4 px-4 lg:px-10">
      <button className="mr-4" onClick={() => changeLanguage("en")}>
        <EnFlag />
      </button>
      <button onClick={() => changeLanguage("am")}>
        <ArmFlag />
      </button>
    </div>
  );
};
export default SelectLanguage;
