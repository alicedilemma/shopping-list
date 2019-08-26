import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { getList, saveList } from 'api'
import { sortItems } from 'utils'
// import { data } from 'utils/data'

import Nav from 'components/Nav'
import MasterList from 'views/master/MasterList'
import ShoppingList from 'views/shop/ShoppingList'

const App = () => {
  const [shoppingListItems, setShoppingListItems] = useState([])

  const fetchData = async () => {
    const list = await getList()
    setShoppingListItems(sortItems(list))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onToggle = (itemId, listName) => {
    const updatedList = shoppingListItems.map(item =>
      item.id === itemId
        ? { ...item, [`checked${listName}`]: !item[`checked${listName}`] }
        : { ...item }
    )
    setShoppingListItems(updatedList)
  }

  return (
    <Router>
      <Nav />
      <button onClick={() => { saveList(shoppingListItems) }}>Save to db</button>
      <Route
        path="/shop"
        component={
          () => (
            <ShoppingList
              items={shoppingListItems}
              setShoppingListItems={setShoppingListItems}
              sortItems={sortItems}
              onToggle={onToggle}
            />)
        } />
      <Route
        path="/master"
        component={
          () => (
            <MasterList
              items={shoppingListItems}
              setShoppingListItems={setShoppingListItems}
              sortItems={sortItems}
              onToggle={onToggle}
            />)
        }
      />
    </Router>
  )
}

export default App
