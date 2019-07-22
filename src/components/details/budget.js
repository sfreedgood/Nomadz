import React from "react"
import BudgetScript from "./budgetWidgetScript";

//redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  let { country } = state.searchParams
  return { country }
}

function Budget (props) {
  let countryCode = props.country && props.country.value
  let countryName = props.country && props.country.label.toLowerCase().replace(" ", "-")
  return (
    <div className="budget-widget">
      <BudgetScript countryCode={countryCode} />
      <a href={`https://www.budgetyourtrip.com/${countryName}`} target="_blank" className="budgetyourtrip-logo-pushdown" rel="noopener noreferrer">
        {`${props.country.label} Budget Information`}
      </a>
    </div>
  )
}

export default connect(
  mapStateToProps
)(Budget)