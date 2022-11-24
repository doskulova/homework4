import React, {Component} from 'react';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state={works:[]}
    }
    getWorks=()=>{
        this.setState({works:["Work1","Work2","Work3"]})
    }
    render() {
        return (
            <div>
                <button onClick={this.getWorks}>get</button>
                <ul>
                    <li>Work1</li>
                    <li>Work2</li>
                </ul>
            </div>
        );
    }
}

export default PortfolioPage;