import { useState } from 'react';
import { Route, Routes, BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.scss';

const Section1 = () => <div className="section">Sección 1</div>;
const Section2 = () => <div className="section">Sección 2</div>;
const Section3 = () => <div className="section">Sección 3</div>;

const App = () => {
  const history = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    { component: Section1, label: 'Sección 1' },
    { component: Section2, label: 'Sección 2' },
    { component: Section3, label: 'Sección 3' },
  ];

  const handleSectionClick = (index: any) => {
    setActiveIndex(index);
    history(`/${index}`);
  };

  return (
    <div className="container">
      <div className="navbar">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`navbar-item ${
              activeIndex === index ? 'active' : ''
            }`}
            onClick={() => handleSectionClick(index)}
          >
            {section.label}
          </div>
        ))}
      </div>
      <div className="content">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="slide"
            timeout={500}
          >
            <Routes>
              {sections.map((section, index) => (
                <Route
                  key={index}
                  path={`/${index}`}
                  element={<section.component />}
                />
              ))}
              <Route path="/" element={<Section1 />} />
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
