import React, {useState, useEffect} from 'react';
import '../styles/table.css';

export default function Table() {

  const [employeesList, setEmployeesList] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  function fetchEmployees() {
    const url = 'https://enfo-test-resources.s3.eu-west-2.amazonaws.com/api/employees';

    fetch(url)
    .then(response => response.json())
    .then(data => setEmployeesList(data))
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  //add sorting functionality when clicking headers (firstname + lastname)
  function sorting(col) {
    //ascending (first click)
    if (isAscending) {

      const sorted = [...employeesList].sort((a, b) => {
        return (
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        )
      });
      setEmployeesList(sorted);
      setIsAscending(false);
    }
    //if descending (second click)
    if (!isAscending) {
      const sorted = [...employeesList].sort((a, b) => {
        return (
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        )
      });
      setEmployeesList(sorted);
      setIsAscending(true);
    }
  }

  return (
    <div className="list">
                <table id="employees-table">
                    <thead>
                        <tr>
                            <th className="sort" data-sort="firstname" onClick={() => sorting("firstname")}>Firstname</th>
                            <th className="sort" data-sort="lastname" onClick={() => sorting("lastname")}>Lastname</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody id="employees">
                      {employeesList.map((person, index) => {
                        return (
                          <tr key={index}>
                            <td>{person.firstname}</td>
                            <td>{person.lastname}</td>
                            <td>{person.role}</td>
                            <td>{person.email}</td>
                            <td>{person.phone}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                </table>
    </div>
  )
}
