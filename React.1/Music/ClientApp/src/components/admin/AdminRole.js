import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = { identityroles: [], loading: true };
      }
      componentDidMount() {
        this.populateIdentityRoles();
      }
      static renderIdentityRolesTable(identityroles) {
        return (
          <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {identityroles.map(identityrole =>
                <tr key={identityrole.Id}>
                  <td>{identityrole.Id}</td>
                  <td>{identityrole.Name}</td>
                </tr>
              )}
            </tbody>
          </table>
        );
      }
    
      render() {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : FetchData.renderIdentityRolesTable(this.state.identityroles);
    
        return (
          <div>
            <h1 id="tableLabel">Identity Roles</h1>
            <p>All Identity Roles in the system.</p>
            {contents}
          </div>
        );
      }
    
      async populateIdentityRoles() {
        const token = await authService.getAccessToken();
        const response = await fetch('weatherforecast', {
          headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ identityroles: data, loading: false });
      }
    }
    
}