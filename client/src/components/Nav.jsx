import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const Nav = props => {
  const { location: { pathname } } = props
  const [tabSelected, setTabSelected] = useState(pathname)

  const handleChangeTab = (e, tabClicked) => {
    setTabSelected(tabClicked)
  }

  return (
    <Tabs
      centered
      value={tabSelected}
      onChange={handleChangeTab}
      variant="fullWidth"
    >
      <Tab
        label="master"
        value="/master"
        component={Link}
        to="/master"
      />
      <Tab
        label="shop"
        value="/shop"
        component={Link}
        to="/shop"
      />
    </Tabs>
  )
}

export default withRouter(Nav)
