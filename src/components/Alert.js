import React from 'react'

export default function Model(props) {
    return (
        <div style={{ height: "50px" }}>
            {props.alert &&
                <div className={`alert alert-${props.alert.type}`} role="alert">
                    {props.alert.message}
                </div>}
        </div>




    )
}
