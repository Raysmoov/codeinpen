import React from 'react';

function LovesCoffee(props) {
  return (
      <div>
      <h1>{props.title}</h1>
      <ul>
        <li>Espresso</li>
        <li>Cold Brew</li>
        <li>Nitro Cold Brew</li>
        <li>Espresso in Nitro Cold Brew</li>
        <li>Blonde Updose</li>
      </ul>
    </div>
  );
}



export default LovesCoffee;

//function App() {<h1>Whats your limit</h1>
//<LovesCoffee /> {/* Use the imported component */}     // <ul>
     //<li>"Espresso"</li>
    // <li>Cold Brew</li>
     // <li>Nitro Cold Brew</li>
     // <li>Espresso in Nitro Cold Brew</li>
     // <li>Blonde Updose</li>
    //</ul>
 // </div>