
const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handlePetsClick = this.handlePetsClick.bind(this);
    this.handlePetAdopt = this.handlePetAdopt.bind(this);

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  handlePetAdopt(id){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  handlePetsClick(){
    let url = "/api/pets";
    const type = this.state.filters.type;

    if(type !== 'all'){
      url = url + `?type=${type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets}));
  }

  handleChangeType(type){
    this.setState({
      filters: Object.assign(this.state.filters, {
        type: type
      })
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
              <Filters filters={this.state.filters}
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.handlePetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handlePetAdopt} pets={this.state.pets} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
