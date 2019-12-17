import React from "react";
// import "../App.css";
import faker from "faker";
import List from "./List";
import "./list.css";

let data = [];
for (let i = 0; i < 25; i++) {
  data.push({
    id: i,
    name: faker.name.findName(),
    price: faker.random.number({ min: 1500, max: 20000 }),
    year: faker.random.number({ min: 15, max: 4 }),
    rating: 0,
    Mobile: faker.phone.phoneNumberFormat(),
    Mail: faker.internet.email(),
    // img: faker.image.avatar()
    image: faker.image.image(150, 200, true)
  });
}

class LawyerList extends React.Component {
  render() {
    return (
      <div>
        {data.map(object => (
          <List
            name={object.name}
            price={object.price}
            year={object.year}
            // phone={object.img}
            num={object.Mobile}
            email={object.Mail}
            photo={object.image}
          />
        ))}
      </div>
    );
  }
}
export default LawyerList;
