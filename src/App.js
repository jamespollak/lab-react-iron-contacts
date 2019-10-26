import React, { Component } from "react";
import "./App.css";
import contact from "./contacts.json";
import CelebrityList from "./components/CelebrityList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contact: contact.slice(0, 5),
      allContacts: contact
    };
  }

  //Adding a random contact
  addRandomContact = () => {
    let randomContact = Math.floor(Math.random() * contact.length);
    let newContact = this.state.allContacts.splice(randomContact, 1);
    this.state.contact.push(newContact[0]);
    this.setState({
      contact: this.state.contact,
      allContacts: this.state.allContacts
    });
  };

  //Sort by name

  sortByName = () => {
    this.state.contact.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      contact: this.state.contact
    });
  };

  //Sort by popularity

  sortByPopularity = () => {
    this.state.contact.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    this.setState({
      contact: this.state.contact
    });
  };

  //Delete contact

  deleteContact = index => {
    const allContacts = [...this.state.contact];
    const contact = allContacts.filter((contact, i) => i !== index);
    this.setState({ contact });
    console.log("delete");
  };

  render() {
    console.log(this.state.contact);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Iron Contacts</h1>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
          {/* {this.state.contact.map((contact, i) => (
            <CelebrityList key={i} contact={this.state.contact} />
          ))} */}
          {/* {this.state.contact.map((actor, i) => (
            <CelebrityList actor={actor} key={i} contact={this.state.contact} />
          ))} */}
          <CelebrityList
            contact={this.state.contact}
            deleteContact={this.deleteContact}
          />
        </header>
      </div>
    );
  }
}

export default App;
