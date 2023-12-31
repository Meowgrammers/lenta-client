const sortByField = (field: string) => {
  return (a: any, b: any) => (a[field] > b[field] ? 1 : -1)
}

export { sortByField }
