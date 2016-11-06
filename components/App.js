const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.handleFilterType = this.handleFilterType.bind(this);
    this.fetchPets = this.fetchPets.bind(this);
    this.handleOnAdoptPet = this.handleOnAdoptPet.bind(this);

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  handleOnAdoptPet(id){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    });
  }

  fetchPets(){
    let url = `/api/pets`;

    if(this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets}));
  }

  handleFilterType(type){
    this.setState({
      filters: Object.assign({}, this.state.filters, {
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
                onChangeType={this.handleFilterType}
                onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                onAdoptPet={this.handleOnAdoptPet}
                adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
