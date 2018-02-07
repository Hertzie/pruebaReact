import React, {Component} from 'react';
import ListaPersonajes from './ListaPersonajes';
import ListaHeroes from './ListaHeroes';
import EquipoStats from './EquipoStats';
import '../styles/index.css';

class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
        <div className="App">
            <h2>Super Heroes</h2>
            <div className="col-md-4">
                <ListaPersonajes />
            </div>
            <div className="col-md-4">
                <ListaHeroes />
            </div>
            <div className="col-md-4">
                <EquipoStats />
            </div>

        </div>
    )
  }
}

export default App;
