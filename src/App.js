import React, { PureComponent } from "react";
// import "./css/Collections.css";

const users = [
  {
    name: "Alex",
    email: "alex@sb.ru",
  },
  {
    name: "Yan",
    email: "yan@sb.ru",
  },
  {
    name: "Max",
    email: "max@sb.ru",
  },
];

const HeaderSimple = ({ text }) => <h1>{text}</h1>;

//===Recursive!===
const User = ({ user }) => (
  <ul>
    {Object.entries(user).map((subEl, k) => (
      <li key={k}>
        <b>{subEl[0]}</b> :
        {typeof subEl[1] === "object" ? <User user={subEl[1]} /> : subEl[1]}
      </li>
    ))}
  </ul>
);

//JSON.stringify(subEl[1])
const UserItem = (props) => (
  <li className="outerLi">{<User user={props.user} />}</li>
);

const alex = {
  name: "Alex",
  email: "alex@sb.ru",
};

const UserList = (props) => (
  <ul>
    {<UserItem user={alex} />}
    {props.users?.map((el, i) => (
      <UserItem user={el} key={i} />
    ))}
  </ul>
);

export default class Collection extends PureComponent {
  state = { users: [{ ...alex }] };

  constructor(props) {
    super(props);
    //this.state ={users: props.users}
  }
  //   static getDerivedStateFromProps({ users }) {
  //     return { users };
  //   }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        this.setState((prevState) => ({ users }));
      });
  }
  render() {
    return (
      <>
        <HeaderSimple text="Users:" />
        <UserList users={this.state.users} />
      </>
    );
  }
}