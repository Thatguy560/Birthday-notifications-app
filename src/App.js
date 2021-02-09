import { useState } from "react";
import { data } from "./birthday-data";

function App() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
    console.log(data[0].age);
  };

  // const getAge = (dateString) => {
  //   var today = new Date();
  //   var birthDate = data[0].age
  //   var age = today.getFullYear() - birthDate.getFullYear();
  //   var m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
  //   {
  //     age--;
  //   }
  //   return age;
  // }

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
                  {name} - {age} Years Old
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
