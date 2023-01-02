import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AgeCalculatorComponent = () => {
  const [value, setValue] = useState();
  const [a, setA] = useState(0);
  const [m, setM] = useState(0);
  const [d, setD] = useState(0);

  const getEdad = (fechaNac) => {
    if (!fechaNac || isNaN(new Date(fechaNac))) return;
    const hoy = new Date();
    const dateNac = new Date(fechaNac);
    if (hoy - dateNac < 0) return;
    let dias = hoy.getUTCDate() - dateNac.getUTCDate();
    let meses = hoy.getUTCMonth() - dateNac.getUTCMonth();
    let years = hoy.getUTCFullYear() - dateNac.getUTCFullYear();
    if (dias < 0) {
      meses--;
      dias = 30 + dias;
    }
    if (meses < 0) {
      years--;
      meses = 12 + meses;
    }
    setA(years);
    setM(meses);
    setD(dias);
  };
  return (
    <div className="card-container">
      <div className="card-body">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue.$d);
              getEdad(newValue.$d);
            }}
            renderInput={(params) => <TextField sx={{ backgroundColor: 'white' }} {...params} />}
          />
        </LocalizationProvider>
        <Button color="primary" variant="contained">
          Calcular
        </Button>
      </div>
      <div className="card-footer">
        <div className="card-item">
          <p> {a}</p>
          <p> Años</p>
        </div>
        <div className="card-item">
          <p> {m}</p>
          <p> Meses</p>
        </div>
        <div className="card-item">
          <p> {d}</p>
          <p> Días</p>
        </div>
      </div>
    </div>
  );
}

export default AgeCalculatorComponent