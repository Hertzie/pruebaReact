import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {agregarPersonajePorId} from '../actions';

class ListaPersonajes extends Component{
  constructor(){
    super();

    this.state = {

    }
  }
  render(){
    console.log('this.props: ', this.props);
    return(
        <div>
            <h4 className="lead">Personajes</h4>
            <ul className="list-group">
                {
                  this.props.personajes.map(personaje => {
                    return (
                      <li key={personaje.id} className="list-group-item">
                          <div className="list-item">{personaje.name}</div>
                          <div
                              className="list-item right-button"
                              onClick={() => this.props.agregarPersonajePorId(personaje.id)}
                          >
                          +
                        </div>
                      </li>
                    )
                  })
                }
            </ul>
        </div>
    )
  }
}

function mapStateToProps(state){

    return {
      personajes: state.personajes
    };
}

//function mapDispatchToProps(dispatch){
  //  return bindActionCreators({agregarPersonajePorId}, dispatch);
//}

export default connect(mapStateToProps, {agregarPersonajePorId})(ListaPersonajes);
