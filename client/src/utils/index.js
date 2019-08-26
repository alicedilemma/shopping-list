const compare = (a, b) => (a > b) - (a < b)

export const sortItems = items => items
  ? items.sort((a, b) => compare(a.category, b.category) || compare(a.id, b.id))
  : []
