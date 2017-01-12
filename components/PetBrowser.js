const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    const petSet = this.props.pets.map(pet=>(<Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />));

    return (
      <div className="ui cards">
        {petSet}
      </div>
    );
  }
}

module.exports = PetBrowser;
