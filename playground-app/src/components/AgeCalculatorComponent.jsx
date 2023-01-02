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
    <div className="AgeCalculator__card-container">
      <div className="AgeCalculator__card-body">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue.$d);
              getEdad(newValue.$d);
            }}
            renderInput={(params) => <TextField sx={{ width:'500px', backgroundColor: '#D9D9D9' }} {...params} />}
          />
        </LocalizationProvider>
        <Button sx={{ width:'223', height:'53px', border:'40px', backgroundColor: '#D9D9D9' ,color:'#000' }} variant="contained">
          Calculate
        </Button>
      </div> 
      <div className="AgeCalculator__card-footer">
        <div className="AgeCalculator__card-item">
          <p className="AgeCalculator__card-item-nums"> {a}</p>
          <p className="AgeCalculator__card-item-letter"> Años</p>
        </div>
        <div className="AgeCalculator__card-item">
          <p className="AgeCalculator__card-item-nums"> {m}</p>
          <p className="AgeCalculator__card-item-letter"> Meses</p>
        </div>
        <div className="AgeCalculator__card-item">
          <p className="AgeCalculator__card-item-nums"> {d}</p>
          <p className="AgeCalculator__card-item-letter"> Días</p>
        </div>
      </div>          
    </div>
  );
}

export default AgeCalculatorComponent