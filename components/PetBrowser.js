const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  constructor(){
    super()
  }

  render() {
    const pets = this.props.pets.map(pet => {
      let isAdopted = this.props.adoptedPets.includes(pet.id)
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} isAdopted={isAdopted}/>
    })
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
