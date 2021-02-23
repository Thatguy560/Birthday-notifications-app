import React, { Component } from "react";
import { render } from "@testing-library/react";
import { data } from "./birthday-data";
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

  // We call this function when we click on the dismiss button
  removePerson = (index) => {
    const newPerson = [...this.state.data];
    newPerson.splice(index, 1);
    this.setState({ data: newPerson });
  };

  // This function sorts the names alphabetically and then updates the state
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

  sortByOldest = () => {
    let olderToYoungerSort = [...this.state.data].sort(
      (a, b) => new Date(a.age) - new Date(b.age)
    );
    this.setState({ data: olderToYoungerSort });
  };

  sortByYoungest = () => {
    let YoungerToOlderSort = [...this.state.data].sort(
      (a, b) => new Date(b.age) - new Date(a.age)
    );
    this.setState({ data: YoungerToOlderSort });
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
        <button className="btn" onClick={this.restoreData}>
          Reset Reminders
        </button>
        <button className="btn" onClick={this.sortByAToZ}>
          Sort By A - Z
        </button>
        <button className="btn" onClick={this.sortByZToA}>
          Sort By Z - A
        </button>
        <button className="btn" onClick={this.sortByYoungest}>
          Sort By Youngest
        </button>
        <button className="btn" onClick={this.sortByOldest}>
          Sort By Oldest
        </button>
        <br></br>
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
              {/* <section> */}
              {/* <h3>January</h3> */}
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
              {/* </section> */}
            </>
          );
        })}
      </div>
    );
  }
}

export default App;

// 2) Try and see if you can implement facebook data (API) into birthdays
