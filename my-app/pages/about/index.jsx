import SumValue, {sum} from './sum';
import React, { useState } from 'react';

export function User() {}
export function UserImage() {}
export function UserName() {}
export function Student() {}

export function Profile({item, score}) { // { item } = props
  return (
    <>
      <h1>{item.name}</h1>
      <img
        className="avatar"
        src={item.imageUrl}
        alt={'Photo of ' + item.name}
        style={{
          width: item.imageSize,
          height: item.imageSize
        }}
      />
    </>
  );
}


export function Counter () {
  const [counter, setCounter] = useState(0);
  let testCounter = 0;
  const click = () => {
    testCounter = testCounter + 1;
    setCounter(counter + 1);
    console.log('testCounter', testCounter)
  };

  return (
    <>
      <p>Counter: {counter}</p>
      <p>test Counter: {testCounter}</p>
      <button onClick={click} >click me to change the counter</button>
    </>
  );
}

export default function AboutUs() {
  const title = <h1>About us</h1>;
  const currentDate = new Date();

  const users = [
    {
      name: '1',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
    ,{
      name: '2',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
    ,{
      name: '3',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
    ,{
      name: '4',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
  ];

  // const sum = (a, b) => a + b;
    return (
      <div>
        <Counter />
        {/* {title}
        { `${currentDate.toDateString()}`}
        <div>{ sum(1, 2) }</div>

        { users.map((user, i) => <Profile key={i} item={user} score={10}/>) } */}
      </div>
    );
  }