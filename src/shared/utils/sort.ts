const sortByField = (field: string) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1)
}

export { sortByField }
