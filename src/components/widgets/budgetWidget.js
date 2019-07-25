import React, { Component } from "react"
import BudgetScript from "./budgetWidgetScript";

//redux
// import { connect } from "react-redux"

// function mapStateToProps (state) {
//   let { country } = state.searchParams
//   return { country }
// }

class Budget extends Component {

  componentWillMount = () => {
    console.log("mounting")
    console.log(this.props)
    this.setState({countryCode: this.props.country.value})
    let regex = / /gi
    this.setState({countryName: this.props.country.label.toLowerCase().replace(regex, "-")})
  }

  componentWillReceiveProps = (props) => {
    console.log("receiving props")
      this.setState({countryCode: props.country.value})
      let regex = / /gi
      this.setState({countryName: props.country.label.toLowerCase().replace(regex, "-")})
  }

  render () {
    return (
      <div className="budget-widget">
        <BudgetScript countryCode={this.state.countryCode} />
        <a href={`https://www.budgetyourtrip.com/${this.state.countryName}`} target="_blank" className="budgetyourtrip-logo-pushdown" rel="noopener noreferrer">
          <h2 className="budget-info">{`${this.props.country.label} Budget Information`}</h2>
        </a>
      </div>
    )
  }
}

export default Budget