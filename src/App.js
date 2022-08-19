import { MenuItem,FormControl,Select, Card, CardContent} from '@mui/material';
import './App.css';
import React, {useEffect, useState} from 'react';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import { sortData } from './utils';




function App() {
const [countries,setCountries] = useState([]);
const [country,setCountry] = useState('worldwide');
const [countryInfo,setCountryInfo] = useState({});
const [tableData,setTableData] = useState([]);

const onCountryChange = async (event) => {
  const countryCode = event.target.value;
  setCountry(countryCode);

  const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all"
  : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
  await fetch(url)
  .then(response => response.json())
  .then(data => { 
    setCountry(countryCode);
     setCountryInfo(data);
  })
}

useEffect(() => {
  fetch("https://disease.sh/v3/covid-19/all")
  .then((response) => response.json())
  .then((data)=> {
    setCountryInfo(data);
  })
})

useEffect(() => {
  const getCountriesData = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data)=>{
      const countries = data.map((country)=>(
      {
        name: country.country,
        value: country.countryInfo.iso3
      }));
      const sortedData = sortData(data); 
      setTableData(sortedData);
     setCountries(countries);
    });
  };
  getCountriesData(countries);
}, []);
 
  return (
    <div className="App">
      <div className="app_left">
      <div className="app_header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">  
       <Select
       variant="outlined"
       value={country}
       onChange={onCountryChange}
       >
        {/* Loop through all the countries and show a drop down list*/}
        <MenuItem value="worldwide">Worldwide</MenuItem>
         {
           countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
             ))
         }
          
       </Select>
      </FormControl> 
      </div>
      
       <div className="app_stats">
        <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
        <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
        <InfoBox title="Death" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
         {/* StatBoxes */}
         {/* StatBoxes */}
         {/* StatBoxes */}
       </div>


         {/* Map */}
           <Map/>
      </div>
      <Card className="app_right">
         <CardContent>
          <h3>Live cases by country</h3>
          <Table countries={tableData}/>
          <h3>Worldwide new cases</h3>
         </CardContent>
          {/* Graph */}
          {/* <LineGraph/> */}
      </Card>
         </div>
  );
}


export default App;
