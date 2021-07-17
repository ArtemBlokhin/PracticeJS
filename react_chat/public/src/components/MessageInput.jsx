/** @jsx React.DOM */

'use strict'

var MessageInput = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
        return {
            message: ''
        }
    },

    keyHandler: function(event) {
        var message = this.state.message.trim();
        if(event.keyCode === 13 && message.length) {
            this.props.messageHandler(message);
            this.setState({
                message:''
            })
        }
    },
    
    render: function() {
        return (
            <input
                className="form-control" type="text"
                placeholder="Enter something..."
                valueLink={this.linkState("message")}
                onKeyUp = {this.keyHandler}
            ></input>
        )
    }
})