const React = require('react');

const Pet = require('./Pet');

export default class PetBrowser extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <div className="ui cards">
        {
          this.props.pets.map((pet) => {
            let adopted = this.props.adoptedPets.includes(pet.id)
            return <Pet pet={ pet } isAdopted={ adopted } onAdoptPet={ this.props.onAdoptPet } />
          })
        }
      </div>
    );
  }
}

PetBrowser.propTypes = {
  pets: React.PropTypes.array,
  adoptedPets: React.PropTypes.array,
  onAdoptPet: React.PropTypes.func,
};

module.exports = PetBrowser;
