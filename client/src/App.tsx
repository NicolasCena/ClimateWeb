import { useState, useCallback, useMemo} from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Favoritos } from "./Routes/Favoritos/Favoritos";
import { Home } from "./Routes/Home/Home";
import { Ajustes } from "./Routes/Ajustes/Ajustes";
import { Header } from "./components/Header/Header";
import { FaBeer } from "react-icons/fa";

const HomeSection = () => <Home />;
const FavoritosSection = () => <Favoritos />;
const AjustesSection = () => <Ajustes />;

const App = () => {
  const history = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = useMemo(
    () => [
      { component: HomeSection, label: <FaBeer /> },
      { component: FavoritosSection, label: "Favoritos" },
      { component: AjustesSection, label: "Ajustes" },
    ],
    []
  );

  const handleSectionClick = useCallback(
    (index: any) => {
      setActiveIndex(index);
      history(`/${index}`);
    },
    [history, setActiveIndex]
  );

  return (
    <div className="container">
      <Header
        sections={sections}
        handleSectionClick={handleSectionClick}
        activeIndex={activeIndex}
      />
      <div className="content">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="slide"
            timeout={500}
          >
            <Routes             
>
              {sections.map((section, index) => (
                <Route
                  key={index}
                  path={`/${index}`}
                  element={<section.component />}
                />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Router;
