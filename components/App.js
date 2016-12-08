const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.filterChange = this.filterChange.bind(this)
    this.findPets = this.findPets.bind(this)
    this.adoptPet = this.adoptPet.bind(this)
  }

  filterChange(type){
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }

  findPets(){
    let route = this.state.filters.type === "all" ? "" : `?type=${this.state.filters.type}`
    let url = `/api/pets${route}`
    fetch(url).then(result => {
      result.json()
    }).then(json => {
      this.setState({
        pets: json
      })
    })
  }

  adoptPet(id){
    let adoptedPets = this.state.adoptedPets
    adoptedPets.push(id)
    this.setState({
      adoptedPets: adoptedPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.filterChange} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
