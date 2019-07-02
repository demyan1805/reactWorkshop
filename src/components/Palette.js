import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';
import Spinner from './Spinner';


export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false,
        loading: false
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.onLoading();
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError);
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
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
            const {src, alt, id} = item;

            return (
                <img src={src} alt={alt} key={id}></img>
            )
        })
    }

    render() {
        const {error, photos, loading} = this.state;
        if (loading) {
            return <Spinner/>
        }
        else if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(photos);
        return (
            <div className="palette">
                {items}
            </div>
        )
    }

}