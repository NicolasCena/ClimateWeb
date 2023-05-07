import { useTranslation } from "react-i18next";
import reinoUnido from "../../assets/icons/reinoUnido.png";
import spain from "../../assets/icons/spain.png";

interface HeaderProps {
  sections: { component: React.FC; label: React.ReactNode }[];
  handleSectionClick: (index: number) => void;
  activeIndex: number;
}

export const Header: React.FC<HeaderProps> = ({
  sections,
  handleSectionClick,
  activeIndex,
}) => {
  
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__lang">
          <button onClick={() => changeLanguage("en")} type="button">
            <img src={reinoUnido} alt="english" />
          </button>
          <button onClick={() => changeLanguage("es")} type="button">
            <img src={spain} alt="spanish" />
          </button>
        </div>
        <h3>Climate Web</h3>
        <ul className="header__list">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`header__list-item ${
                index === activeIndex ? "header__list-item--active" : ""
              }`}
              onClick={() => handleSectionClick(index)}
            >
              {section.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
