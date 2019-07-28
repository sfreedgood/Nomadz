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
    let country = this.props.country.country || this.props.country.label
    this.setState({countryCode: this.props.country.value})
    let regex = / /gi
    this.setState({countryName: country.toLowerCase().replace(regex, "-")})
  }

  componentWillReceiveProps = (props) => {
    console.log("receiving props")
    let country = this.props.country.country || this.props.country.label
      this.setState({countryCode: props.country.value})
      let regex = / /gi
      this.setState({countryName: country.toLowerCase().replace(regex, "-")})
  }

  render () {
    return (
      <div className="nav-box budget-widget">
        {/* <BudgetScript countryCode={this.state.countryCode} /> */}
        <a href={`https://www.budgetyourtrip.com/${this.state.countryName}`} target="_blank" className="budgetyourtrip-logo-pushdown" rel="noopener noreferrer">
          {`${this.props.country.country || this.props.country.label} Budget Information`}
        </a>
      </div>
    )
  }
}

export default Budget