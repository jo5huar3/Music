import React, { Component } from 'react';
import authService from '../api-authorization/AuthorizeService'
import { Row, Col } from 'reactstrap/lib';

export class FetchRoles extends Component {
  static displayName = FetchRoles.name;

  constructor(props) {
    super(props);
    this.state = { roles: [], loading: true };
  }

  componentDidMount() {
    this.populateRoles();
  }

  static renderRolesTable(roles) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role =>
            <tr key={role.id}>
              <td>{role.name}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchRoles.renderRolesTable(this.state.roles);

    return (
      <div>
        <h1 id="tableLabel">Roles</h1>
        <p>This component demonstrates fetching Roles from the server.</p>
        <div>
          {contents}
        </div>
        <div>
          <form>
            <Row className="row-cols-lg-auto g-3 align-items-center">
              <Col>
              <input
                id="role-name"
                name="role"
                placeholder="Role Name"
              />
              </Col>
              <Col>
              <button>
                Submit
              </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    );
  }

  async populateRoles() {
    const token = await authService.getAccessToken();
    const response = await fetch('Admin/Fetch', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    this.setState({ roles: data, loading: false });
  }
}