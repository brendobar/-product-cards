import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("User ID");   //your user id

const call_t = {
    position:'relative',
    width:'100%',
    fontSize: '1.5vw',
    margin: '2vw 0',
    color:'white',
    backgroundColor:'#F13C6E',
    borderRadius:'20px'
  }

  
  const di = {
    textAlign:'left',
    fontSize:'1vw'
  }


export default class Form extends Component{

    constructor(props) {
        super(props);
        this.state={name:'',telephone:'', mail:'', product:''};
        this.submitClient = this.submitClient.bind(this);
        this.clientChange = this.clientChange.bind(this);
  }

    clientChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    } 


    
    submitClient(event){
        alert('name: ' + this.state.name + ' telephone: ' + this.state.telephone + ' mail: ' + this.state.mail + ' product: ' + this.state.product);
        event.preventDefault();



        emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{                   
            name: this.state.name,
            telephone: this.state.telephone,
            mail: this.state.mail,
            product: this.state.product,
            });
        
    }


    render(){
        return(
            <form onSubmit={this.submitClient} id="cardForm">

                <p style={di}>Ваше имя</p>
                <TextField
                  
                  margin="dense"
                  name="name"
                  value={this.state.name}
                  onChange={this.clientChange.bind(this)}
                  label=""
                  fullWidth
                  required
                />

                <p style={di}>
               	Контактный номер телефона
                </p>
                <TextField
                  
                  margin="dense"
                  name="telephone"
                  value={this.state.telephone}
                  onChange={this.clientChange.bind(this)}
                  label=""
                  fullWidth
                  required
                />

                <p style={di}>
                Email
                </p>
                <TextField
                  
                  margin="dense"
                  name="mail"
                  value={this.state.mail}
                  onChange={this.clientChange.bind(this)}
                  label=""
                  fullWidth
                  required
                />

                <p style={di}>
                Название товара
                </p>
                <TextField
                  
                  margin="dense"
                  name="product"
                  value={this.state.product}
                  onChange={this.clientChange.bind(this)}
                  label=""
                  fullWidth
                  required
                />

                <Button  variant="outlined" style={call_t} type="submit">Отправить</Button>

            </form>
        );
    }


} 