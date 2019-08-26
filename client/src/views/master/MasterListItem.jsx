import React from 'react'

import Switch from '@material-ui/core/Switch'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const MasterListItem = props => {
  const { name, description, onToggle, checked } = props
  return (
    <ListItem
      dense
      button
      disableRipple
    >
      <ListItemIcon>
        <Switch
          edge="start"
          onChange={onToggle}
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
