import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';


export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false,
        loading: false
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.onLoading();
        this.InstaService.getUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false,
            loading:false
        })
    }

    onError = (e) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onLoading = () => {
        this.setState({
            error: false,
            loading: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, id} = item;

            return (
                <User 
                min
                src={photo}
                alt={altname}
                name={name}
                key={id}/>
            )
        })
    }

    render() {
        const {error, users, loading} = this.state;
        if (loading) {
            return <Spinner/>
        }
        else if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(users);
        return (
            <div className="right">
                <User src="data:image/png;base64,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"
                    alt="user"
                    name="userName"
                    href="/profile"/>
                <div className="users__block">
                    {items}
                </div>
            </div>
        )

    }
}