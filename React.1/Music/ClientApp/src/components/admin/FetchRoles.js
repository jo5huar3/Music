import React, { useState } from 'react';
import authService from '../api-authorization/AuthorizeService'
import { Row, Col } from 'reactstrap/lib';

export function FetchRoles() {
  const [roles, setRoles] = useState([])
  const [newRole, setNewRole] = useState("")
  const [loading, setLoading] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    if (newRole !== "") {
      addRole()
    }
  }

  let contents = loading
    ? <p><em>Loading...</em></p>
    : renderRolesTable(roles);

  if (loading) {
    populateRoles()
  }

  return (
    <div>
      <h1 id="tableLabel">Roles</h1>
      <div>
        <div><p>Current Roles in the system</p></div>
        {contents}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col>
              <input
                value={newRole}
                onChange={e => setNewRole(e.target.value)}
                id="rolename"
                name="rolename"
                placeholder="Role Name"
              />
            </Col>
            <Col>
              <button>
                Add
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );

  async function deleteRole(rolename) {
    const token = await authService.getAccessToken();
    await fetch('Admin/DeleteRole', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(rolename)
    })
    setLoading(true)
  }

  async function addRole() {
    const token = await authService.getAccessToken();
    const response = await fetch('Admin/AddRole', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newRole)
    })
    //const data = await response.json();
    //console.log(response.status)
    //setRoles(data);
    setLoading(true);
    setNewRole("");
  }

  async function populateRoles() {
    const token = await authService.getAccessToken();
    const response = await fetch('Admin/Fetch', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    setRoles(data);
    setLoading(false);
    setNewRole("");
  }


  function handleDelete(e) {
    deleteRole(e)
  }

  function renderRolesTable(roles) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role =>
            <tr key={role.name}>
              <td>
                <label>
                  {role.name}
                </label>
                </td>
                <td>
                <button onClick={() => handleDelete(role.name)} >
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}