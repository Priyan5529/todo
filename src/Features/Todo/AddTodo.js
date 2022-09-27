import React, { useState, useContext } from 'react'
import TextField from '../../components/UI/TextField';
import Button from '../../components/UI/Button';
import { Context } from "../../TodoProvider";
import "./AddTodo.css";

export default function AddTodos() {
    const [todoValue, setVal] = useState("");
    const {addTodo} = useContext(Context);

    const onKeyPressHandler = (e) => {
        if (e.charCode === 13) {
            addTodo();
        }
    };

    const onChangeHandler = (e) => {
        setVal(e.target.value);
    };

    return (
        <>
            <div >
                <TextField style={{ marginTop: "10px", textAlign: "left" }}
                    onKeyPress={onKeyPressHandler}
                    value={todoValue}
                    onChange={onChangeHandler}
                    placeholder="Things to be done..."

                />
            </div>
            <div>
                <Button className="button" onClick={() => {
                    addTodo(todoValue);
                    setVal("");
                }}
                    
                    value="AddTodo" />
            </div>
        </>
    );
}
