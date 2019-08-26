import React from 'react'

import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import ShoppingListItem from 'views/shop/ShoppingListItem'

const ShoppingList = props => {
  const { items, onToggle } = props
  const shoppingItems = items.filter(item => item.checkedMaster)

  return (
    <Grid container>
      <Grid item xs={2} sm={3}>
      </Grid>
      <Grid item xs={8} sm={6}>
        <List>
          <h3>Shopping List</h3>
          {shoppingItems && shoppingItems.length > 0
            ? shoppingItems.map(item =>
              <ShoppingListItem
                key={`${item.id}-${item.name}`}
                onClick={() => onToggle(item.id, 'Shop')}
                checked={item.checkedShop}
                {...item}
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

export default ShoppingList
