import React from 'react'
import superagent from 'superagent'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      zipCode: ''
    }
  }
  
  searchVenue() {
    console.log('searchVenues: ' + this.state.zipCode)

    const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBNFr53cVfmjaFSEzicYR6igvpS8MNUFFE&callback=initMap'

    superagent
    .get(url)
    .query(null)
    .set('Aceept', 'application/json')
    .end((err, response) => {
      console.log('RESPONSE: ' + JSON.stringify(response))
    })
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