const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdopt = this.handleAdopt.bind(this);
  }

  handleAdopt(){
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    const {pet, isAdopted} = this.props;
    const {name, type, gender, age, weight} = pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {name}  {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!isAdopted ? <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button> :
          <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
