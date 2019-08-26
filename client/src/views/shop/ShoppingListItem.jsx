import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const MasterListItem = props => {
  const { name, description, onClick, checked } = props
  return (
    <ListItem
      disableRipple
      dense
      button
      onClick={onClick}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked}
        />
      </ListItemIcon>
      <ListItemText
        primary={name}
        secondary={description} />
    </ListItem>
  )
}

export default MasterListItem
