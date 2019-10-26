import React, { Component } from "react";

export default class CelebrityList extends Component {
  render() {
    // console.log(this.props);
    // const { pictureUrl, name, popularity } = this.props.contact;
    // console.log("test", this.props.contact[0].name);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contact.map((actor, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      src={actor.pictureUrl}
                      alt=""
                      width="50px"
                      height="70px"
                    />
                  </td>
                  <td>{actor.name}</td>
                  <td>{actor.popularity}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.deleteContact(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
