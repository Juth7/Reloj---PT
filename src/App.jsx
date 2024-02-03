import { Route, Routes } from "react-router-dom";
import { Formulario } from "./components/Formulario";
import Reloj from "./components/Reloj";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Reloj />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </>
  );
};

export default App;
