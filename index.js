import React from 'react';
import ReactDOM from 'react-dom';

const child1 = " love family";
const child2= " apply for job";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYaer();



ReactDOM.render(

  <div>

  <h1 className="headingStyle"> Call of Duty</h1>
  <h3> {child1}</h3>
  <p>{child2}</p>
  <p>{ dateName + '/' + monthName + '/' + yearName} </p>
  </div>,

  document.getElementById('root')
);
