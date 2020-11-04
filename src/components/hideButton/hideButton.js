import React from 'react'

const HideButton = ({onClickHide}) => {
    return (
        <div>
            <button className="btn btn-info" onClick={() => onClickHide()}>Hide it</button>
        </div>    
    )
}

export default HideButton