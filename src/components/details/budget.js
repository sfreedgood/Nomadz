import React from "react"

//redux
import { connect } from "react-redux"
import BudgetScript from "./budgetWidgetScript";

function mapStateToProps (state) {
  let { location } = state.searchParams
  return { location }
}

function Budget (props) {
  let countryCode = props.location && props.location.value
  let countryName = props.location && props.location.label.toLowerCase().replace(" ", "-")
  return (
    <div className="budget-widget">
      <BudgetScript countryCode={countryCode} />
      <a href={`https://www.budgetyourtrip.com/${countryName}`} target="_blank" className="budgetyourtrip-logo-pushdown" rel="noopener noreferrer">
        {`${props.location.label} Budget Information`}
      </a>
    </div>
  )
}

export default connect(
  mapStateToProps
)(Budget)