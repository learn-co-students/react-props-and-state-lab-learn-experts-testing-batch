const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} 
          isAdopted={!!this.props.adoptedPets.find(id => id == pet.id)} >{this.props.children}</Pet>)}
      </div>
    );
  }
}

module.exports = PetBrowser;
