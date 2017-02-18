const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props)

    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleFindPetsClick = this.handleFindPetsClick.bind(this)
  }

  handleChangeType(event) {
    this.props.onChangeType(event.target.value)
  }

  handleFindPetsClick() {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={ this.props.filters.type } onChange={ this.handleChangeType }>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={ this.handleFindPetsClick }>Find pets</button>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  filters: React.PropTypes.object,
  onChangeType: React.PropTypes.func,
  onFindPetsClick: React.PropTypes.func,
};

module.exports = Filters;
