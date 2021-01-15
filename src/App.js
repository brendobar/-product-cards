import './App.css';
import {React, Component} from 'react';
import Card from "./components/Card";
import productList from './config/product.json';
import { Grid } from '@material-ui/core';



var prodList = productList.product



export default class App extends Component{

 
  render(){
    return (
    <div className="App">
			<div className="gridCard" id="price">
			    <Grid container  spacing={2}>
			      <Grid item xs={12}>
			        <Grid container justify="center" spacing={8}>
			          {prodList.map((value) => ( 
			            <Grid key={value} item >
			            	<Card image={value.img} sName={value.name} coast={value.price} />
			            </Grid>
			          ))}
			        </Grid>
			      </Grid>
			    </Grid>
			</div>       



    </div>
  );
  }
  
}

