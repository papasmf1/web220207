import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {
  firstName :'jina',
  lastName: 'kim'
}

function today() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  return year +'/' + month + '/' + day;
}

class HelloWorld extends React.Component {
  render() {
      return <div>
                  <h1>Hello, {user.firstName}{user.lastName}!</h1>
                  <h4>Today: {today()}</h4>
              </div>;
  }
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
