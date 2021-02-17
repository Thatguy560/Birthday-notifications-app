import { useState } from "react";
import { data } from "./birthday-data";
// import FacebookLogin from "react-facebook-login";

function App() {
  const [people, setPeople] = useState(data);

  function removePerson(id) {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  }

  // Get function working
  function sortByAge() {
    console.log("test");
    data.sort((a, b) => {
      return new Date(a.age).getFullYear() - new Date(b.age).getFullYear();
    });
  }

  function sortByName() {
    console.log(data[0].name);
    people.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <>
      <h1>
        {people.length > 0
          ? `${people.length} Birthday Reminders`
          : "All Caught Up On Birthday Reminders"}
      </h1>
      <br></br>
      <button className="btn" onClick={() => setPeople(data)}>
        Restore Reminders
      </button>
      <button className="btn" onClick={() => sortByName()}>
        Sort By Name
      </button>
      <button className="btn" onClick={() => sortByAge()}>
        Sort By Age
      </button>
      <br></br>
      {people.map((person) => {
        const { id, name, image, age } = person;

        // Format age so the day is displayed first and then the month
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

        function getBirthDate() {
          const date = new Date(age);
          let getBirthMonth = monthNames[date.getMonth()]; // Looks at the Month Array and uses the persons month as the key
          let getBirthYear = age.slice(6, 10); // Slices the age in the array and only returns the year.
          let singleNumberDate = age.slice(3, 4); // Checks first number of the day e.g. if it's the 3rd it will return 0, if it's the 30th it will return 3.
          return singleNumberDate === 0 // If single date then only return the single day e.g. the 5th would be 5, else (e.g. if it's the 25th) then it will return 25.
            ? `${getBirthMonth} ${age.slice(4, 5)}, ${getBirthYear}`
            : `${getBirthMonth} ${age.slice(3, 5)}, ${getBirthYear}`;
        }

        // Work out age based on birth date
        let birthDate = new Date(age);
        let otherDate = new Date();
        var years = otherDate.getFullYear() - birthDate.getFullYear();
        if (
          otherDate.getMonth() < birthDate.getMonth() ||
          (otherDate.getMonth() === birthDate.getMonth() &&
            otherDate.getDate() < birthDate.getDate())
        ) {
          years--;
        }
        // if current month is lower than birth month than + 1 to age
        console.log(years);

        return (
          <div className="container" key={id}>
            <div className="avatar">
              <div>
                <img src={image} alt={name} />
              </div>

              <div>
                <h3>
                  {name} - {years} years old
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
        );
      })}
    </>
  );
}

export default App;

// 1) Ensure that months are ordered in the following e.g. Jan, feb march...
// 2) Get sort by name function working
// 3) Get sort by age function working
// 4) // Try and see if you can implement facebook data (API) into birthdays
