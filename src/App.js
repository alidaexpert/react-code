import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <div className="search">
      <input style={{padding:"10px 20px"}} type="text" />
      <button style={{padding:"12px",backgroundColor:"salmon",border:"0",borderRadius:"5px"}}>Search</button>
      </div>
      <LoadCountries></LoadCountries>
    </div>
  );
}

const LoadCountries=()=>{
const [countries,setCountries]=useState([])

useEffect(()=>{
  fetch("https://restcountries.eu/rest/v2/all")
  .then(res=>res.json())
  .then(data=>setCountries(data))
},[])

  return(
    <div>
      <h2>Travelling to the world</h2>
      <h3>Country Available {countries.length}</h3>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
      {countries.map(country=><Country name={country.name} capital={country.capital} region={country.region} population={country.population}  callingCodes={country.callingCodes} flag={country.flag} key={Math.random()}></Country>)}
      </div>
    </div>
  )
}
const Country=props=>{
  const countryStyle={
    backgroundColor:"skyblue",
    color:"white",
    borderRadius:"10px",
    border:"2px solid salmon",
    margin:"20px",
    padding:"10px"
  }
  return(
    <div style={countryStyle}>
      <h2>Country Name:{props.name}</h2>
      <h4 style={{color:"red"}}>Capital: {props.capital}</h4>
      <h4 style={{color:"red"}}>region: {props.region}</h4>
      <h4 style={{color:"red"}}>population: {props.population}</h4>
      {/* <h5>languagesName:{props.languages[0].name}</h5> */}
      <h6>callingCodes:{props.callingCodes}</h6>
      <img src={props.flag} alt="" width="80px" />
    </div>
  )
}


export default App;
