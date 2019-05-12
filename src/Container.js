import React from 'react';

class Container extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            list: [
                "blah",
                "who cares",
                "something",
                "something else"
            ]
        }
    }


    render() {
        return (
            <div className="container">
                <p>hi</p>
            </div>

        )
    }
}

export default Container 
