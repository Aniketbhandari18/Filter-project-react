import "../Sidebar/Category/Category.css"

const Input = ({handleChange, value, name, title}) => {
  const checked = false;
  return (
    <div className="option">
        <label>
          <input onChange={handleChange} type="radio" value={value} name={name}/> {title}
        </label>
    </div>
  )
}
export default Input