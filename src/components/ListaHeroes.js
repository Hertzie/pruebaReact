import React, {Component} from 'react';
import {connect} from 'react-redux';
import {eliminarPersonajePorId} from '../actions';

class ListaHeroes extends Component{
  render(){
    return(
        <div>
            <h4 className="lead">Tu equipo de Heroes</h4>
            <ul className="list-group">
                {
                  this.props.heroes.map(heroe => {
                    return(
                        <li key={heroe.id} className="list-group-item">
                            <div className="list-item">{heroe.name}</div>
                            <div
                                className="list-item right-button"
                                onClick={() => this.props.eliminarPersonajePorId(heroe.id)}
                            >
                            x
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
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, {eliminarPersonajePorId})(ListaHeroes);
