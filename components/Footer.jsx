
import React from 'react'
import PropTypes from 'prop-types'
import { VisibilityFilters } from '../actions.js'
import FilterLink from 'containers/FilterLink.jsx'

const Footer = ({}) => (
  <p>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
)

export default Footer
