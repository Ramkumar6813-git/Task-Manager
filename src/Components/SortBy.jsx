import { useContext } from "react"
import { TaskContext } from "./TaskContext"

const SortBy = () => {
    const {sortByDate} = useContext(TaskContext)

    const handleSortBy = (e) => {
      sortByDate(e.target.value)
    }

  return (
    <section className="d-flex align-items-center">
    <h4 className="mt-2 me-2">Sort By Date:</h4>
    <select className="form-control w-25" onChange={handleSortBy}>
      <option value="default">Default</option>
      <option value="ASC">Ascending</option>
      <option value="DESC">Descending</option>
    </select>

  </section>
  )  
}

export default SortBy