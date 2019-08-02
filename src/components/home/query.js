import React, { Component } from "react"
import Select from 'react-select'

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { budget, duration, dates } = state
  return { budget, duration, dates }
};

function mapDispatchToProps (dispatch) { //list of action-creators to be dispatched
  return {
    setDuration: (duration) => dispatch({type: "SET_DURATION", payload: {duration}}),
    setBudget: (budget) => dispatch({type: "SET_BUDGET", payload: {budget: budget}}),
    setDates: (dates) => dispatch({type: "SET_DATES", payload: {dates: dates}})
  }
}

//Component
class Query extends Component {
  state = {
    queryTitle: this.props.query.toUpperCase() + "?", 
    queryOptions: this.props.queryData.map( (item, index) => {
      return {value: item, label: item}
    }),
  }

  setSearchParam = (event) => {
    let selection = event.value //country list event is an object, all other event are standard targets
    this.setState({
      value: selection
    })

    switch (this.props.query) {
      case "when":
        this.props.setDates(selection)
        break
      case "budget":
        this.props.setBudget(selection)
        break
      case "duration":
        this.props.setDuration(selection)
        break
      default:
        return null
    }
  }

  render () {
    return(
      <div className="query">
        <h1 className="query-title">{this.state.queryTitle}</h1>
        <form className="search-field">
        <Select 
          onChange={(this.setSearchParam, 'select-option')} 
          options={this.state.queryOptions}
          value={this.state.value}
          defaultValue={this.state.queryOptions[0]}
        />
        
        </form>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Query)