import React from "react";
import ReactDOM from "react-dom/client";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoriteColor: "red"}
    }

    static getDerivedSateFromProps(props, state) {
        return {favoriteColor: props.favCol}
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: "yellow"})
        }, 1000)
    }

    render() {
        return (<h1>Mi Color favorito es {this.state.favoriteColor}</h1>);
    }
}

ReactDOM.render(<Header/>, document.getElementById("root"));