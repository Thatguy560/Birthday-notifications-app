import { useState } from "react";
import { data } from "./birthday-data";
// import FacebookLogin from "react-facebook-login";

function App() {
  const [people, setPeople] = useState(data);

  function removePerson(id) {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  }

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

  // function formatAge() {
  // people.map((person) => {
  //   const { id, name, image, age } = person;
  //   age.slice(0, 5).split("/").reverse().join("/") + age.slice(5, 10);
  // });
  // }

  // Also incorporate sort method (sort by alphabet and month)

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
      <button className="btn">Sort By Date</button>
      <br></br>
      {people.map((person) => {
        const { id, name, image, age } = person;
        // Format age so the day is displayed first and then the month
        let birthYear =
          age.slice(0, 5).split("/").reverse().join("/") + age.slice(5, 10);

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

        return (
          <div className="container" key={id}>
            <div className="avatar">
              <div>
                <img src={image} alt={name} />
              </div>

              <div>
                <h3>
                  {name} - {years} Years Old
                </h3>
                <h4>{birthYear}</h4>
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

// 1) Try and get Facebook API implemented in once year and birthday works
