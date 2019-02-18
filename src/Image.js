import React, { Component } from 'react';

class Image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.src}/>
                <ul>
                <i class="fas fa-plus"></i>
                </ul>
            </div>
        )
    }
}
export default Image;