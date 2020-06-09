import React from 'react'

function ThankYou() {
    return (
        <div>
            <h1>
                Thanks for using this tool!
            </h1>
            <h3>
                Please make sure to share it with others
            </h3>
            <div>
                <a onClick={() => window.open('/', '_self')}>Go home</a>
            </div>
        </div>
    )
}

export default ThankYou