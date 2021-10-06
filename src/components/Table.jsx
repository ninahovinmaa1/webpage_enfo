import React, {useState, useEffect} from 'react';

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

  return (
    <div class="list">
                <table>
                    <thead>
                        <tr>
                            <th class="sort" data-sort="firstname">Firstname</th>
                            <th class="sort" data-sort="lastname">Lastname</th>
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
                            <td>{person.email}</td>
                            <td>{person.phone}</td>
                            <td>{person.role}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                </table>
    </div>
  )
}
