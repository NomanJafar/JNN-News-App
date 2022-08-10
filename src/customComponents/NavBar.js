import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom'
import './NavBar.css';


export default class NavBar extends Component {
 
 
 
 
    render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" style={{color:"white"}}  to="/">{this.props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" style={{color:"white"}} aria-current="page" to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" style={{color:"white"}} aria-current="page" to="/">About</NavLink>
        </li> */}
        
        <li className="nav-item">
          <NavLink className="nav-link" style={{color:"white"}}  to="/business">Business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={{color:"white"}}  to="/entertainment">Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={{color:"white"}}  to="/health">  health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={{color:"white"}}  to="/science">science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={{color:"white"}}  to="/sports">sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={{color:"white"}}  to="/technology">technology</NavLink>
        </li>
        
     

       

     
      </ul>
      <div className="dropdown" >
  <a className="btn btn-secondary dropdown-toggle mx-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {this.props.countryToshow}
  </a>

  <ul className="dropdown-menu  dropdown-menu-dark " style={{overflow: "hidden", overflowY: "auto" ,overflowX: "hidden",maxHeight: "calc(100vh - 150px)", maxWidth: "1rem"}}>
      
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/at">at</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/au">au</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/be">be</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/bg">bg</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/br">br</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/ca">ca</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/ch">ch</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/cn">cn</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/co">co</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/cu">cu</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/cz">cz</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/de">de</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/eg">eg</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/fr">fr</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/gb">gb</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/gr">gr</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/hk">hk</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/hu">hu</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/id">id</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/ie">ie</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/il">il</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/in">in</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/it">it</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/jp">jp</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/kr">kr</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/lt">lt</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/lv">lv</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/ma">ma</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/mx">mx</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/my">my</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/ng">ng</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/nl">nl</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/no">no</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/nz">nz</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/ph">ph</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/pl">pl</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/pt">pt</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/ro">ro</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/rs">rs</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/ru">ru</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/sa">sa</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/se">se</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/sg">sg</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/si">si</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/sk">sk</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/th">th</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/tr">tr</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/tw">tw</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/ua">ua</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/us">us</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/ve">ve</Link></li>
      <li> <Link className="dropdown-item"  style={{color:"white"}} onClick={ (e)=>this.props.country(e.target.innerHTML)} to="/za">za</Link></li>
  </ul>
</div>
    </div>
  </div>
</nav>
      
      </>
    )
  }
}
