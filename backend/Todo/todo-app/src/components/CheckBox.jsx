import React, {Fragment} from "react";

const CheckBox = props => {
    const {
        onChnge, data: {id, description, done}
    } = props;
    return (<Fragment>
        <label className="todo new-item">
            <input className="todo_state"
                   name={id}
                   type="checkbox"
                   defaultChecked={done}
                   onChange={onChnge}/>
            <div className="todo_text">{description}</div>
        </label>
    </Fragment>);
}
export default CheckBox;