export const getList = () => {
  return fetch('/api/list')
    .then(res => res.json())
    .then(data => {
      return data.list
    })
}

export const saveList = list => {
  fetch('/api/list', {
    method: 'POST',
    body: JSON.stringify({ list }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => console.log(res))
}
