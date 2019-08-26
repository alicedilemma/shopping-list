import React from 'react'

import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import MasterListItem from 'views/master/MasterListItem'

const MasterList = props => {
  const { items, onToggle } = props

  return (
    <Grid container>
      <Grid item xs={2} sm={3}>
      </Grid>
      <Grid item xs={8} sm={6}>
        <List>
          <h3>Master List</h3>
          {items && items.length > 0
            ? items.map(item =>
              <MasterListItem
                key={`${item.id}-${item.name}`}
                {...item}
                onToggle={() => onToggle(item.id, 'Master')}
                checked={item.checkedMaster}
              />)
            : <Typography>List is empty!</Typography>
          }
        </List>
      </Grid>
      <Grid item xs={2} sm={3}>
      </Grid>
    </Grid>
  )
}

export default MasterList
