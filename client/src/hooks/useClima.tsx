import { useContext } from "react";
import { ClimaContext } from "../contexts/ClimaContext";

const useClima = () => useContext(ClimaContext);

export default useClima;