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

    const url = 'http://api.forsquare.com/v2/venues/search?v=20140806&ll=-33.8670,151.1957&client_id=D4YEDGD1GTKLGI2I3M4XACTYM5BCOOPDYGYS4Q02KK4E05QF&client_secret=AF0KJ1OGPZBFAPMB1SJO4YBQPNBONYKVUZI0ZSSYKRMMSTUG'

    superagent
      .get(url)
    .query(null)
    .set('Aceept', 'application/json')
    .end(response => {
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