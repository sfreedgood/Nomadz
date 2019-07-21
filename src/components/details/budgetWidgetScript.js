import React, { Component } from "react"
import Script from "react-load-script"



class BudgetScript extends Component {


  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }
  
  handleScriptError() {
    this.setState({ scriptError: true })
  }
  
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  render() {
    console.log(this.props.countryCode)
    return (
      <Script
        url={`https://widget.budgetyourtrip.com/location-widget-js/${this.props.countryCode}`}
        onCreate={this.handleScriptCreate.bind(this)}
        onError={this.handleScriptError.bind(this)}
        onLoad={this.handleScriptLoad.bind(this)}
    />
    )
  }
}

export default BudgetScript