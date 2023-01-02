import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const ImcCalculatorComponent = () => {
  const [peso, setPeso] = useState(0);
  const [talla, setTalla] = useState(0);
  const [imc, setImc] = useState(0);
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");
  const statusColor = [
    "#1D90CF",
    "#5AB5EB",
    "#2FA149",
    "#F5CC37",
    "#F5CC37",
    "#DB1F30",
  ];

  const handlePeso = (e) => {
    setPeso(e.target.value);

    setImc(result(peso, talla));
  };

  const handleTalla = (e) => {
    setTalla(e.target.value);
    setImc(result(peso, talla));
  };

  const result = (peso, talla) => {
    let valTalla = talla / 100;
    let imc = parseFloat(peso) / Math.pow(valTalla, 2);
    if (imc < 18.5) {
      setStatus("Delgado");
      setColor(statusColor[0]);
    }
    if (imc > 18.5 && imc < 24.9) {
      setStatus("Aceptable");
      setColor(statusColor[1]);
    }
    if (imc > 25 && imc < 29.9) {
      setStatus("Sobrepeso");
      setColor(statusColor[2]);
    }
    if (imc > 30 && imc < 34.9) {
      setStatus("Obesidad");
      setColor(statusColor[3]);
    }
    if (imc > 35 && imc < 39.9) {
      setStatus("Obesidad");
      setColor(statusColor[4]);
    }
    if (imc > 40) {
      setStatus("Obesidad");
      setColor(statusColor[5]);
    }
    return imc;
  };
  return (
    <div className="ImcCalculator__container">
      <div className="ImcCalculator__card-body">
        <p>40kg-180kg</p>
        <div className="ImcCalculator__card-item">
          <Box width={535} sx={{ display: "flex", alignItems: "center" }}>
            <Slider
              step={1}
              marks
              min={40}
              max={180}
              defaultValue={100}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={handlePeso}
            />
          </Box>
          <p>{peso} kg</p>
        </div>
        <p>120cm-230cm</p>
        <div className="ImcCalculator__card-item">
          <Box width={535} sx={{ display: "flex", alignItems: "center" }}>
            <Slider
              step={1}
              marks
              min={120}
              max={230}
              defaultValue={150}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={handleTalla}
            />
          </Box>
          <p>{talla} cm</p>
        </div>

        <div className="ImcCalculator__card-footer">
          <div className="ImcCalculator_card-footer-imcValue">
            {imc.toFixed(2)}
          </div>
          <div
            className="ImcCalculator_card-footer-statusValue"
            style={{ color: color }}
          >
            {status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImcCalculatorComponent;
