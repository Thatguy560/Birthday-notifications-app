import { useState } from "react";
import { data } from "./birthday-data";
// import FacebookLogin from "react-facebook-login";

function App() {
  const [people, setPeople] = useState(data);

  // Date Format: MM/DD/YYYY
  function getAge() {
    var i = 0;
    while (i < people.length) {
      let birthDate = new Date(people[i].age);
      let otherDate = new Date();
      var years = otherDate.getFullYear() - birthDate.getFullYear();
      // console.log(people[i].age);
      // console.log(data[0].age);
      if (
        otherDate.getMonth() < birthDate.getMonth() ||
        (otherDate.getMonth() === birthDate.getMonth() &&
          otherDate.getDate() < birthDate.getDate())
      ) {
        i++;
        years--;
      }
      return years;
    }
  }

  function removePerson(id) {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  }

  // function formatAge() {
  //   people.map((person) => {
  //     const { id, name, image, age } = person;
  //     age.slice(0, 5).split("/").reverse().join("/") + age.slice(5, 10);
  //   });
  // }

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
      <br></br>
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
                <h4>
                  {age.slice(0, 5).split("/").reverse().join("/") +
                    age.slice(5, 10)}
                </h4>
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

// 1) Sort out birthday function which calculate age based on Date.now and the date format person is born in
// 2) Try and get Facebook API implemented in once year and birthday works

// const getAge = () => {
//   for (let i = 0; i < data.length; i++) {
//     let birthDate = new Date(data[i].age);
//     let otherDate = new Date();

//     var years = otherDate.getFullYear() - birthDate.getFullYear();

//     if (
//       otherDate.getMonth() < birthDate.getMonth() ||
//       (otherDate.getMonth() === birthDate.getMonth() &&
//         otherDate.getDate() < birthDate.getDate())
//     ) {
//       years--;
//     }
//     return years;
//   }
// };
