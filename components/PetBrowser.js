const React = require('react');

const Pet = require('./Pet');

const MALE_DOG = {
  "id": "9e7cc723-d7f5-440d-8ead-c311e68014ee",
  "type": "dog",
  "gender": "male",
  "age": 8,
  "weight": 6,
  "name": "Kennedy"
};

const FEMALE_CAT = {
  "id": "86520b4b-7849-4462-b511-cddc7f416ad6",
  "type": "cat",
  "gender": "female",
  "age": 7,
  "weight": 6,
  "name": "Cuddles"
};

class PetBrowser extends React.Component {

  render() {
    const petsGroup = this.props.pets.map(pet => (
      <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    ))
    return (
      <div className="ui cards">
        {petsGroup}
      </div>
    );
  }
}

module.exports = PetBrowser;
