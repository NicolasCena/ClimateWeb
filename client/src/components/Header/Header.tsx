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
  return (
    <header>
      <nav>
        <ul>
          {sections.map((section, index) => (
            <li
              key={index}
              className={index === activeIndex ? "active" : ""}
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
