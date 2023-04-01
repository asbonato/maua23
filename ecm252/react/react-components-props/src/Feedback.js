import React from "react"

const Feedback = props => {
    return (
        <div className="d-flex justify-content-evenly m-2">
            <button
                type="button"
                onClick={props.funcaoOK}
                className="btn btn-primary">
                    {props.textoOK}
            </button>
            <button
                type="button"
                onClick={props.funcaoNOK}
                className="btn btn-danger">
                    {props.textoNOK}
            </button>
        </div>
    )
}

export default Feedback