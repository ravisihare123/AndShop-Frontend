import React from 'react'

const JewellaryHeading = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="jewellary_heading">
                        <h2>{props.heading}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JewellaryHeading