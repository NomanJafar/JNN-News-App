
import './App.css';
import React, { Component } from 'react'
import NavBar from './customComponents/NavBar';
import News  from './customComponents/News';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
apiKey="a99d51173fa7417ca1e8f81a81629cca"
constructor(props){
  super(props);
  this.toggleCountry();
  this.state={
    country:"us",
    progress:0
  }
}

setProgress = (progress)=>{
this.setState({progress: progress});
}

toggleCountry=(e)=>{
console.log(e);
  this.setState({country:e})
}

  render() {
    
    return (
      <div>
<BrowserRouter>
<LoadingBar color='#f11946' progress={this.state.progress}  height={3} />
<NavBar title="JNN" country={this.toggleCountry} countryToshow={this.state.country}/>



        <Routes>
          <Route    path="/home" element={<News apiKey={this.apiKey} key="general" noOfPages={12} setProgress={this.setProgress}  country={this.state.country} category="general"/>} />
          <Route  exact  path="/" element={<News apiKey={this.apiKey} key="general" noOfPages={12} setProgress={this.setProgress} country={this.state.country} category="general"/>} />
          <Route  exact  path="/business" element={<News apiKey={this.apiKey} key="business" noOfPages={12}setProgress={this.setProgress}  country={this.state.country} category="business"/>} />
          <Route  exact  path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" setProgress={this.setProgress}  noOfPages={12} country={this.state.country} category="entertainment"/>} />
          <Route  exact  path="/health" element={<News apiKey={this.apiKey} key="health" noOfPages ={12} setProgress={this.setProgress}  country={this.state.country} category="health"/>} />
          <Route  exact  path="/science" element={<News apiKey={this.apiKey} key="science" noOfPages={12} setProgress={this.setProgress}  country={this.state.country} category="science"/>} />
          <Route  exact  path="/sports" element={<News apiKey={this.apiKey} key="sports" noOfPages={12} setProgress={this.setProgress}  country={this.state.country} category="sports"/>} />
          <Route  exact  path="/technology" element={<News apiKey={this.apiKey} key="technology" noOfPages={12} setProgress={this.setProgress}   country={this.state.country} category="technology"/>} />
          
          <Route  exact  path="/at" element={<News apiKey={this.apiKey} key="at" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/au" element={<News apiKey={this.apiKey} key="au" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/be" element={<News apiKey={this.apiKey} key="be" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/bg" element={<News apiKey={this.apiKey} key="bg" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/br" element={<News apiKey={this.apiKey} key="br" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/ca" element={<News apiKey={this.apiKey} key="ca" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/ch" element={<News apiKey={this.apiKey} key="ch" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/cn" element={<News apiKey={this.apiKey} key="cn" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/co" element={<News apiKey={this.apiKey} key="co" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/cu" element={<News apiKey={this.apiKey} key="cu" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/cz" element={<News apiKey={this.apiKey} key="cz" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/de" element={<News apiKey={this.apiKey} key="de" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/eg" element={<News apiKey={this.apiKey} key="eg" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/fr" element={<News apiKey={this.apiKey} key="fr" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/gb" element={<News apiKey={this.apiKey} key="gb" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/gr" element={<News apiKey={this.apiKey} key="gr" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/hk" element={<News apiKey={this.apiKey} key="hk" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/hu" element={<News apiKey={this.apiKey} key="hu" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/id" element={<News apiKey={this.apiKey} key="id" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/ie" element={<News apiKey={this.apiKey} key="ie" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/il" element={<News apiKey={this.apiKey} key="il" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/in" element={<News apiKey={this.apiKey} key="in" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/it" element={<News apiKey={this.apiKey} key="it" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/jp" element={<News apiKey={this.apiKey} key="jp" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/kr" element={<News apiKey={this.apiKey} key="kr" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/lv" element={<News apiKey={this.apiKey} key="lv" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/ma" element={<News apiKey={this.apiKey} key="ma" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/mx" element={<News apiKey={this.apiKey} key="mx" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/my" element={<News apiKey={this.apiKey} key="my" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/ng" element={<News apiKey={this.apiKey} key="ng" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/nl" element={<News apiKey={this.apiKey} key="nl" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/no" element={<News apiKey={this.apiKey} key="no" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/nz" element={<News apiKey={this.apiKey} key="nz" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/ph" element={<News apiKey={this.apiKey} key="ph" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/pl" element={<News apiKey={this.apiKey} key="pl" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/pt" element={<News apiKey={this.apiKey} key="pt" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/ro" element={<News apiKey={this.apiKey} key="ro" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/rs" element={<News apiKey={this.apiKey} key="rs" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/ru" element={<News apiKey={this.apiKey} key="ru" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/sa" element={<News apiKey={this.apiKey} key="sa" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/se" element={<News apiKey={this.apiKey} key="se" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/si" element={<News apiKey={this.apiKey} key="si" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/sk" element={<News apiKey={this.apiKey} key="sk" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/th" element={<News apiKey={this.apiKey} key="th" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/tr" element={<News apiKey={this.apiKey} key="tr" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/tw" element={<News apiKey={this.apiKey} key="tw" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/ua" element={<News apiKey={this.apiKey} key="ua" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/us" element={<News apiKey={this.apiKey} key="us" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/ve" element={<News apiKey={this.apiKey} key="ve" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />
          <Route  exact  path="/za" element={<News apiKey={this.apiKey} key="za" noOfPages={12} setProgress={this.setProgress} country={this.state.country} />} />


        </Routes>
    

</BrowserRouter>
       
        
      </div>
    )
  }
}

