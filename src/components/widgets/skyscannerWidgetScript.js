import React, { Component } from "react"
import Script from "react-load-script"

class SkyscannerWidgetScript extends Component {
  state = {
    city: this.props.city
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
        url={"https://widgets.skyscanner.net/widget-server/js/loader.js"}
        onCreate={this.handleScriptCreate.bind(this)}
        onError={this.handleScriptError.bind(this)}
        onLoad={this.handleScriptLoad.bind(this)}
      />
    )
  }
}

export default SkyscannerWidgetScript