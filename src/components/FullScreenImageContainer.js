import React, {Component} from 'react';

class FullScreenImageContainer extends Component {
    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        console.log(this.props);
        return (
            <div className="full-screen-image-container">
                <div className="original-image-container">

                </div>
            </div>
        )
    }
}

export default FullScreenImageContainer;