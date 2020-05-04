import React, { Component } from "react";

export default class FecthDummyAPI extends Component {
  state = {
    loading: true,
    poeple: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data.results,
      loading: false,
    });
  }

  if(this.state.loading){
    <div> ..loading.. </div>
  }

  if(!this.state.people.length) {
    <div> people not found </div>
  }

  const peopleJSX = this.state.people.map(person => (
    <div key={person.login.uuid}>
    <div> {person.name.title} </div>
    <div> {person.name.first} </div>
    <div> {person.name.last} </div>
    <img src={person.picture.large} alt="Pic" />
    </div>
        ));

  render() {
    return (
        <div>
            {this.peopleJSX}
        </div>;
    )
}