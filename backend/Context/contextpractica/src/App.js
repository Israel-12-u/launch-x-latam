import logo from './logo.svg';
import './App.css';
import React from "react";
import Username from "./components/Username";

export const UserContext = React.createContext();

function App() {
    return (
        <UserContext.Provider value="Kevin">
            <Username/>
        </UserContext.Provider>
    );
}

function User() {
    const value = React.useContext(UserContext);
    return(
        <h1>{value}</h1>
    );

   /*
   forma de React 16.0
   return (
        <UserContext.Consumer>
            {value => <h1>{value}</h1>}
        </UserContext.Consumer>
    );*/
}

export default App;
