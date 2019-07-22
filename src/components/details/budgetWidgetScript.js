import React, { Component } from "react"
import Script from "react-load-script"



class BudgetScript extends Component {
  state = {
    countryCode: this.props.countryCode
  }

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