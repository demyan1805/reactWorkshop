import React, {Component} from 'react';

export default class User extends Component {
    render() {
        return (
            <a href={this.props.href} className={this.props.min ? "user min" : "user"} key={this.props.key}>
                <img src={this.props.src} alt={this.props.alt}/>
                <div>{this.props.name}</div>
            </a>
        )
    }
}