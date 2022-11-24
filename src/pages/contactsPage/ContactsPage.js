import React, {Component} from 'react';

class ContactsPage extends Component {
    constructor(props) {
        super(props);
        this.state={input:""}
    }
    changeText=(event)=>{
        this.setState({input:event.target.value})
    }
    addText=(event)=>{
        console.log(this.state)
        this.setState({input:event.target.value})
    }
    clearText=(event)=>{
        this.setState({input:event.target.value})
    }



    render() {
        return (
            <div>
                <input onChange={this.changeText}
                       type="text"
                       value={this.state.input}
                />
                <button onClick={this.addText}>add</button>
                <button onClick={this.clearText}>clear</button>

            </div>
        );
    }
}

export default ContactsPage;