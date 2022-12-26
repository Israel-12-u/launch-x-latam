import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';


function App() {
  let localtime = new Date();
  let qatar = localtime.getTime() + (localtime.getTimezoneOffset());
  const root = ReactDOM.createRoot(document.getElementById("root"));
  let horaQatar = new Date(qatar + (3600000 * 9));
  const title = React.createElement(
    'h1',
    {},
    "La hora es:"
  );
  root.render(title);
  const element = (
    <div className="App">
      <header className="App-header">
        <h1>La hora es: </h1>
        <h2>En México: {new Date().toLocaleTimeString('es-MX')}</h2>
        <h2>En EUA: {new Date().toLocaleTimeString("en-US")}</h2>
        <h2>En Korea: {new Date().toLocaleTimeString("ko-KR")}</h2>
        <h2>En Qatar: {horaQatar.toLocaleTimeString("es-MX")}</h2>
      </header>
    </div>
  );
  root.render(element);
}

export default App;
