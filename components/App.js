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

    this.handleChangeFilterType = this.handleChangeFilterType.bind(this)
    this.handleFindPetsClick = this.handleFindPetsClick.bind(this)
    this.handleAdoptPetClick = this.handleAdoptPetClick.bind(this)
  }

  handleChangeFilterType(type) {
    this.setState({
      filters: Object.assign({},this.state.filters, {
        type: type
      })
    });
  }

  handleFindPetsClick() {
    let url = '/api/pets'
    if (this.state.filters.type === 'cat' || this.state.filters.type === 'dog' || this.state.filters.type === 'micropig') {
      url += `?type=${this.state.filters.type}`
    } 
    // console.log(fetch(url).then(res=>res.json()))
    fetch(url)
      .then(res => res.json())
      .then(pets => {
        this.setState({
          pets
        })  
      })
    return fetch(url).then(res => res.json())
    // console.log('called');
    // return true;
  }

  handleAdoptPetClick(petId) {
    this.setState({
      adoptedPets: this.state.adoptedPets.concat([petId])
    });
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
              <Filters filters={this.state.filters}
                       onChangeType={this.handleChangeFilterType}
                       onFindPetsClick={this.handleFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                          adoptedPets={this.state.adoptedPets}
                          onAdoptPet={this.handleAdoptPetClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
