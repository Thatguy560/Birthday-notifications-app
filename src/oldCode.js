import React, { Component } from "react";
import { render } from "@testing-library/react";
import { useState } from "react";
import { data } from "./birthday-data";
// import FacebookLogin from "react-facebook-login";

function App() {
  const [people, updateData] = useState(data);

  // We call this function when we click on the dismiss button
  function removePerson(id) {
    let newPerson = people.filter((person) => person.id !== id);
    updateData(newPerson);
  }

  // This function sorts the names alphabetically and then updates the state
  function sortByName() {
    let alphabeticSort = [...data].sort((a, b) => a.name.localeCompare(b.name));
    updateData(alphabeticSort);
  }

  // To do (Function that sorts out age from youngest to oldest)
  function sortByAge() {}

  // function invokedFunction() {
  //   console.log("loaded!");
  // }

  return (
    <>
      <h1>
        {/* {invokedFunction()} */}
        {people.length > 0
          ? `${people.length} Birthday Reminder(s)`
          : "All Caught Up On Birthday Reminders"}
      </h1>
      <br></br>
      <button className="btn" onClick={() => updateData(data)}>
        Restore Reminders
      </button>
      <button className="btn" onClick={() => sortByName()}>
        Sort By Name
      </button>
      <button className="btn" onClick={() => sortByAge()}>
        Sort By Age
      </button>
      <br></br>

      {/* This method will (Hopefully) order the birthdays from jan, feb, march etc. */}
      {people.map((person) => {
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
            return "Birthday is Today";
          // To amend Method (Check if correct)
          if (currentMonth >= birthMonth + 1)
            return ` Will be ${years + 1} years old in ${
              birthMonth + (12 - currentMonth)
            } months`;
        }

        let yearSort = [...data].sort((a, b) => a.age.localeCompare(b.age));
        // console.log(yearSort);

        return (
          // <section>
          // <h3>January</h3>
          <div className="container" key={id}>
            <div className="avatar">
              <div>
                <img src={image} alt={name} />
              </div>

              <div>
                <h3>
                  {name} - {CalculateTimeToBirthday()}
                </h3>

                <h4>Birth Date - {getBirthDate()}</h4>
              </div>
            </div>
            <div className="button">
              <button className="btn" onClick={() => removePerson(id)}>
                Dismiss
              </button>
            </div>
          </div>
          // </section>
        );
      })}
    </>
  );
}

export default App;

// 1) Ensure that months are ordered in the following e.g. Jan, feb march...
// 2) Get sort by age function working
// 3) // Try and see if you can implement facebook data (API) into birthdays

// data.sort((a, b) => {
//   return new Date(a.age).getFullYear() - new Date(b.age).getFullYear();
// });

// updateData(newPerson);
// this.setState(newPerson: this.state.newPerson)
