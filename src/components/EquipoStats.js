import React, {Component} from 'react';
import {connect} from 'react-redux';

class EquipoStats extends Component{

  fuerza(){
    let fuerza = 0;
    this.props.heroes.forEach(heroe => fuerza += heroe.strength);
    return fuerza;
  }
  inteligencia(){
    let inteligencia = 0;
    this.props.heroes.forEach(heroe => inteligencia += heroe.intelligence);
    return inteligencia;
  }
  velocidad(){
    let velocidad = 0;
    this.props.heroes.forEach(heroe => velocidad += heroe.speed);
    return velocidad;
  }

  render(){
    return(
      <div>
          <h4 className="lead">Estatus del equipo</h4>
          <ul className="list-group">
              <li className="list-group-item">
                  <b>Total de fuerza: </b>{this.fuerza()}
              </li>
              <li className="list-group-item">
                  <b>Total de inteligencia: </b>{this.inteligencia()}
              </li>
              <li className="list-group-item">
                  <b>Total de velocidad: </b>{this.velocidad()}
              </li>
          </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, null)(EquipoStats);
