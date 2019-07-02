import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';


export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false,
        loading: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.onLoading();
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false,
            loading: false
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
            const {name, altname, photo, src, alt, descr, id} = item;

            return (
                <div key={id} className="post">
                    <User src={photo}
                    alt={altname}
                    name={name}
                    min/>
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        })
    }
    
    render() {
        const {error, posts, loading} = this.state;
        if (loading) {
            return <Spinner/>
        }
        else if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);
        
        return (
            <div className="left">
                {items}
            </div>
        )
    }
}