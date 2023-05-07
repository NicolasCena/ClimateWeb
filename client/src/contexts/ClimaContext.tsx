import { createContext, useState } from "react";

interface ClimaContextType {
  respuestaBusqueda: any[];
  setRespuestaBusqueda: (respuestaBusqueda: any[]) => void;
  favoritos: any[];
  setFavoritos: (favoritos: any[]) => void;
}

export const ClimaContext = createContext<ClimaContextType>({
  respuestaBusqueda: [],
  setRespuestaBusqueda: () => {},
  favoritos: [],
  setFavoritos: () => {},
});

export const ClimaProvider = ({ children }: { children: React.ReactNode }) => {
  const [respuestaBusqueda, setRespuestaBusqueda] = useState<any[]>([]);
  const [favoritos, setFavoritos] = useState<any[]>([]);

  return (
    <ClimaContext.Provider
      value={{ respuestaBusqueda, setRespuestaBusqueda, favoritos, setFavoritos }}
    >
      {children}
    </ClimaContext.Provider>
  );
};
