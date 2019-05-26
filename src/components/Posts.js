import React, {Component} from 'react';
import Post from './Post';


export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="http://media.springernature.com/w300/springer-static/cover-hires/journal/41586/569/7756"/>
                <Post alt="nature" src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg"/>
                <Post alt="nature" src="https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/nature-wildlife/naturewildlife-1000x1000.jpg"/>
            </div>
        )
    }
}