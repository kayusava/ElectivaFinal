import "./App.scss";
import { DatePicker } from "antd";

function App() {
  const prueba_fecha = (date, dateString) => console.log(date, dateString);
  return (
    <div className="app">
      <h1>Welcome!</h1>
      <DatePicker onChange={prueba_fecha}></DatePicker>
    </div>
  );
}
export default App;