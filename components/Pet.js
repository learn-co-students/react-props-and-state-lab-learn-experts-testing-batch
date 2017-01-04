const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.adoptPet = this.adoptPet.bind(this)
  }

  adoptPet(e){
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const {pet} = this.props
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {pet.name} (gender: {pet.gender === 'male' ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">Pet type: {pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted ? <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
