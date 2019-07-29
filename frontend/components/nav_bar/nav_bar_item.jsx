import React from 'react'
import { Link } from 'react-router-dom'

export default ({ to, title }) => <Link to={to}>{title}</Link>