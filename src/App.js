import { useState } from "react";
import { data } from "./birthday-data";
// import FacebookLogin from "react-facebook-login";

function App() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
    console.log(data[0].age);
    console.log("year " + new Date().getFullYear());
    console.log("month " + new Date().getMonth());
  };

  const getAge = () => {
    // Format: MM/DD/YYYY
    for (let i = 0; i < data.length; i++) {
      let birthDate = new Date(data[i].age);
      let otherDate = new Date();

      var years = otherDate.getFullYear() - birthDate.getFullYear();

      if (
        otherDate.getMonth() < birthDate.getMonth() ||
        (otherDate.getMonth() === birthDate.getMonth() &&
          otherDate.getDate() < birthDate.getDate())
      ) {
        years--;
      }
      return years;
    }
  };

  return (
    <>
      <h1>
        {people.length > 0
          ? `${people.length} Birthdays Today`
          : "All Caught Up On Birthday Reminders"}
      </h1>
      <button className="btn" onClick={() => setPeople(data)}>
        Restore Reminders
      </button>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return (
          <div className="container" key={id}>
            <div className="avatar">
              <div>
                <img src={image} alt={name} />
              </div>

              <div>
                <h3>
                  {name} - {getAge()} Years Old
                </h3>
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

// Sort out birthday function which calculate age based on Date.now and the date format person is born in
