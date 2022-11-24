import React, {Component} from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state={text:false}
    }
    hideText=()=>{
        this.setState({text:!this.state.text})

    }
    render() {
        return (
            <div>
                <button onClick={this.hideText}>click</button>
                {
                    this.state.text && <p>Hello!</p>
                }

            </div>
        );
    }
}

export default AboutUs;