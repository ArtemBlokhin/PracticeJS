/** @jsx React.DOM */
'use strict';
var UsersList = React.createClass({
    render: function() {
        var users = this.props.users.map(function(user){
            return <div className='chat-user'>{user}</div>
        });
        return (
            <div className='chat-userslist'>
                <p className='userslist'>Список пользователей:</p>
                <div className='users'>
                    {users}
                </div>
            </div>
        )
    }
})