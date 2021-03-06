import React, { Component } from "react";
import { render } from "@testing-library/react";
import { data } from "./birthday-data";
import ReactFacebookLogin from "./facebookLogin";

// import FacebookLogin from "react-facebook-login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.sort((a, b) => a.age.localeCompare(b.age)),
    };
    this.baseState = this.state;
  }

  restoreData = () => {
    this.setState(this.baseState);
  };

  removePerson = (index) => {
    const newPerson = [...this.state.data];
    newPerson.splice(index, 1);
    this.setState({ data: newPerson });
  };

  sortByAToZ = () => {
    let alphabeticSort = [...this.state.data].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({ data: alphabeticSort });
  };

  sortByZToA = () => {
    let reverseAlphabeticSort = [...this.state.data].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    this.setState({ data: reverseAlphabeticSort });
  };

  sortByOldestToYoungest = () => {
    let olderToYoungerSort = [...this.state.data].sort(
      (a, b) => new Date(a.age) - new Date(b.age)
    );
    this.setState({ data: olderToYoungerSort });
  };

  sortByYoungestToOldest = () => {
    let youngerToOlderSort = [...this.state.data].sort(
      (a, b) => new Date(b.age) - new Date(a.age)
    );
    this.setState({ data: youngerToOlderSort });
  };

  sortByJanuary = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "01"),
    });
  };

  sortByFebruary = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "02"),
    });
  };

  sortByMarch = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "03"),
    });
  };

  sortByApril = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "04"),
    });
  };

  sortByMay = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "05"),
    });
  };

  sortByJune = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "06"),
    });
  };

  sortByJuly = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "07"),
    });
  };

  sortByAugust = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "08"),
    });
  };

  sortBySeptember = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "09"),
    });
  };

  sortByOctober = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "10"),
    });
  };

  sortByNovember = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "11"),
    });
  };

  sortByDecember = () => {
    this.setState({
      data: this.state.data.filter((person) => person.age.slice(0, 2) === "12"),
    });
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.data.length > 0
            ? `${this.state.data.length} Birthday Reminder(s)`
            : "All Caught Up On Birthday Reminders"}
        </h1>
        <br></br>
        <br></br>
        <ReactFacebookLogin />
        <br></br>
        <button className="btn" onClick={this.restoreData}>
          Reset Reminders
        </button>
        <button className="btn" onClick={this.sortByAToZ}>
          Sort By A - Z
        </button>
        <button className="btn" onClick={this.sortByZToA}>
          Sort By Z - A
        </button>
        <button className="btn" onClick={this.sortByYoungestToOldest}>
          Sort By Youngest
        </button>
        <button className="btn" onClick={this.sortByOldestToYoungest}>
          Sort By Oldest
        </button>
        <br></br>
        <br></br>
        <button className="btn" onClick={this.sortByJanuary}>
          Sort By Jan
        </button>
        <button className="btn" onClick={this.sortByFebruary}>
          Sort By Feb
        </button>
        <button className="btn" onClick={this.sortByMarch}>
          Sort By Mar
        </button>
        <button className="btn" onClick={this.sortByApril}>
          Sort By Apr
        </button>
        <button className="btn" onClick={this.sortByMay}>
          Sort By May
        </button>
        <button className="btn" onClick={this.sortByJune}>
          Sort By June
        </button>
        <button className="btn" onClick={this.sortByJuly}>
          Sort By July
        </button>
        <button className="btn" onClick={this.sortByAugust}>
          Sort By Aug
        </button>
        <button className="btn" onClick={this.sortBySeptember}>
          Sort By Sep
        </button>
        <button className="btn" onClick={this.sortByOctober}>
          Sort By Oct
        </button>
        <button className="btn" onClick={this.sortByNovember}>
          Sort By Nov
        </button>
        <button className="btn" onClick={this.sortByDecember}>
          Sort By Dec
        </button>

        {this.state.data.map((person) => {
          const { id, name, image, age } = person;

          const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          // Formats Birth date in the format month/Day, year
          function getBirthDate() {
            const date = new Date(age);
            let getBirthMonth = monthNames[date.getMonth()]; // Looks at the Month Array and uses the persons month as the key
            let getBirthYear = age.slice(6, 10); // Slices the age in the array and only returns the year.
            let singleNumberDate = age.slice(3, 4); // Checks first number of the day e.g. if it's the 3rd it will return 0, if it's the 30th it will return 3.
            return singleNumberDate === 0 // If single date then only return the single day e.g. the 5th would be 5, else (e.g. if it's the 25th) then it will return 25.
              ? `${getBirthMonth} ${age.slice(4, 5)}, ${getBirthYear}`
              : `${getBirthMonth} ${age.slice(3, 5)}, ${getBirthYear}`;
          }

          // This code Work out age based on birth date
          let birthDate = new Date(age);
          let currentDate = new Date();
          var years = currentDate.getFullYear() - birthDate.getFullYear();
          if (
            currentDate.getMonth() < birthDate.getMonth() ||
            (currentDate.getMonth() === birthDate.getMonth() &&
              currentDate.getDate() < birthDate.getDate())
          ) {
            years--;
          }

          // getMonth() method returns the month of a date as a number from 0 to 11. To get the correct month, add 1.
          let currentMonth = currentDate.getMonth() + 1;
          let birthMonth = birthDate.getMonth() + 1;
          let currentDay = currentDate.getDate();
          let birthDay = birthDate.getDate();

          // if current month is lower than birth month than + 1 to age
          function CalculateTimeToBirthday() {
            if (currentMonth === birthMonth && birthDay < currentDay)
              return `Turned ${years} years old ${Math.abs(
                birthDay - currentDay
              )} day(s) ago`;
            if (currentMonth === birthMonth && birthDay > currentDay)
              return ` Will be ${years + 1} years old in ${
                birthDay - currentDay
              } day(s)`;
            if (currentMonth + 1 === birthMonth)
              return ` Will be ${years + 1} years old next month`;
            if (currentMonth < birthMonth)
              return ` Will be ${years + 1} years old in ${
                birthMonth - currentMonth
              } months`;
            if (currentMonth === birthMonth && birthDay === currentDay)
              return "BIRTHDAY IS TODAY DON'T FORGET TO WISH THEM A HAPPY BIRTHDAY";
            // To amend Method (Check if correct)
            if (currentMonth >= birthMonth + 1)
              return ` Will be ${years + 1} years old in ${
                birthMonth + (12 - currentMonth)
              } months`;
          }

          return (
            <>
              <div className="container" key={id}>
                <div className="avatar">
                  <div>
                    <img src={image} alt={name} />
                  </div>
                  <div>
                    <h3>
                      {name} - {CalculateTimeToBirthday()}
                    </h3>

                    <h4>Birth Date - {getBirthDate()} </h4>
                  </div>
                </div>

                <div className="button">
                  <button className="btn" onClick={this.removePerson}>
                    Dismiss
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default App;

// 1) Try and see if you can implement facebook data (API) into birthdays
