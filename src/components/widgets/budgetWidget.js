import React, { Component } from "react"
// import BudgetScript from "./budgetWidgetScript";

//redux
// import { connect } from "react-redux"

// function mapStateToProps (state) {
//   let { country } = state.searchParams
//   return { country }
// }

class Budget extends Component {

  componentWillMount = () => {
    console.log("mounting")
    this.setState({countryCode: this.props.country.value})
    let regex = / /gi
    this.setState({countryName: this.props.country.label.toLowerCase().replace(regex, "-")})
    this.buildScript(this.props.country.value)
  }

  // componentWillUpdate () {
  //   let element = document.getElementsByClassName("budgetWidgetScript")
  //   console.log(element)
  //   element.remove();
  // }

  buildScript (countryCode) {
    console.log(this.state)
    if (this.state) {
      let element = document.getElementById(`budgetWidgetScript${this.state.countryCode}`)
      console.log(element)
      element.remove();    // element && element.remove(); // This does not remove the element from the dom
    }
    let script = document.createElement("script");
    script.id = `budgetWidgetScript${countryCode}`
    script.src =  `https://widget.budgetyourtrip.com/location-widget-js/${countryCode}`;
    // script.async = true;
    console.log(script)
    // let container = document.createElement("div")
    // container.className = "widget-container"
    // document.body.append(container)
    document.body.append(script);
  }

  componentWillReceiveProps = (props) => {
    console.log("receiving props")
      this.setState({countryCode: props.country.value})
      let regex = / /gi
      this.setState({countryName: props.country.label.toLowerCase().replace(regex, "-")})

    this.buildScript(props.country.value)

  }

  render () {
    // let countryCode = this.props.country && this.props.country.value
    // let countryName = this.props.country && this.props.country.label.toLowerCase().replace(" ", "-")
    return (
      <div className="budget-widget">
        {/* <BudgetScript countryCode={countryCode} /> */}
        <a href={`https://www.budgetyourtrip.com/${this.state.countryName}`} target="_blank" className="budgetyourtrip-logo-pushdown" rel="noopener noreferrer">
          <h2 className="budget-info">{`${this.props.country.label} Budget Information`}</h2>
        </a>
      </div>
    )
  }
}

export default Budget