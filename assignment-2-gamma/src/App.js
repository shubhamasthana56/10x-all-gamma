import "./App.css";
const App = (props)=> {
  const employeeData = props.employee;
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={employeeData.profileImg} alt="profile"></img>
        </div>
        <div className="employee-name">
          {employeeData.name}
        </div>
        <div className="employee-label">
          <label htmlFor="location">
            Location
          </label>
          <div className="employee-data">
            {employeeData.location}
          </div>
          
        </div>
        <div className="employee-label">
          <label htmlFor="blood-group">
            Blood group
          </label>
          <div className="employee-data">
            {employeeData.bloodGroup}
          </div>
          
        </div>
        <div className="employee-label">
          <label htmlFor="age">
            Age
          </label>
          <div className="employee-data">
            {employeeData.age}
          </div>
          
        </div>
      </div>
    </>
  )
}
export default App;