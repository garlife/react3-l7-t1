import React from 'react';
import './style.css';

const users = [
  {
    name: 'Alex',
    email: 'Alex@sberbank.ru',
  },
  {
    name: 'Yan',
    email: 'Yan@sberbank.ru',
  },
  {
    name: 'Max',
    email: 'Max@sberbank.ru',
  },
];

// const Exapmle1 = () => (
// <div>Hello, world!</div>
// );

// const Exapmle2 = () => <div>{"Hello, world!"}</div>;

// const helloWorld = 'Hello, world!';
// const Exapmle3 = () => {
//   return <div>{helloWorld}</div>;
// };

const Userlist = ({ users }) => (
  <ul>
    {users.map(({ name, email, index }) => (
      <>
        <li key={index}>
          {' '}
          {name} {'<'}
          {email}
          {'>'};
        </li>
      </>
    ))}
  </ul>
);

export default function App() {
  return (
    <>
      <Userlist users={users} />
    </>
  );
}
