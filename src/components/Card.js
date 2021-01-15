import {React, Component} from 'react';
import PopupButton from "./popupButton";


export default class Card extends Component{


    render(){
        return(
            <div id="card">
                <img className="dp" alt={this.props.sName.replace(/\"/g, "")} src={this.props.image.replace(/\"/g, "")}/>
                <div id="textbox">
                    <p className="text">{this.props.sName.replace(/\"/g, "")}</p>
                    <p className="text">{this.props.coast.replace(/\"/g, "")}</p>
                    <PopupButton/>
                </div>
            </div>
            )
    }
    

}