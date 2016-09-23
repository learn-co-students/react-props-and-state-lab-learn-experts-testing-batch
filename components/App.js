const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

const API_URL = '/api/pets'

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

    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.findPets = this.findPets.bind(this)
  }

  onAdoptPet(petId) {
    this.state.adoptedPets.push(petId)
  }

  handleChangeType(newType) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: newType,
      })
    })
  }

  findPets() {
    if (this.state.filters.type === 'all') {
      fetch(API_URL)
        .then(res => res.json())
        .then(json => this.setState({pets: json}))
    } else {
      fetch(`${API_URL}?type=${this.state.filters.type}`)
        .then(res => res.json())
        .then(json => this.setState({pets: json}))
    }
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
