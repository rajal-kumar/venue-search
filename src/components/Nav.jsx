import React from 'react'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      zipCode: ''
    }
  }
  
  searchVenue() {
    console.log('searchVenues: ' + this.state.zipCode)
  }

  updateZipCode(event) {
    console.log('updateZipCode: ' + event.target.value)

    //This is updating the values in the state.
    this.setState({
      zipCode: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.updateZipCode.bind(this)} type="text" placeholder="Enter Zip code" />
        <button onClick={this.searchVenue.bind(this)}>Search</button>
      </div>
    )
  }
}

export default Nav