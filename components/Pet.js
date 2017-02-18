const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }

  handleAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{ this.props.pet.name } (gender: { this.props.pet.gender === "male" && '♂' } { this.props.pet.gender === "female" && '♀' } )</a>
          <div className="meta">
            <span className="date">{ this.props.pet.type }</span>
          </div>
          <div className="description">
            <p>Age: { this.props.pet.age }</p>
            <p>Weight: { this.props.pet.weight }</p>
          </div>
        </div>
        <div className="extra content">
          { !this.props.isAdopted &&
            <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>
          }
          { this.props.isAdopted && 
            <button className="ui disabled button">Already adopted</button>
          }
        </div>
      </div>
    );
  }
}

Pet.propTypes = {
  pet: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    age: React.PropTypes.number, 
    weight: React.PropTypes.number
  }), 
  isAdopted: React.PropTypes.bool,
  onAdoptPet: React.PropTypes.func
}

module.exports = Pet;
