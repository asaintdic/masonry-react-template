import React, { useState, useEffect } from 'react';
import Mainboard from './Mainboard.js'
import Navbar from './Navbar.js';
import gallery from './gallery.js'
// import Home from './Home.js'

function App() {

  const [pins, setNewPins] = useState([])

  const getImages = (term) => {
    // return gallery.get("https://api.unsplash.com/search/photos", {
      return gallery.get("gs://masonrysl.appspot.com/Images", {
      params: {
        query: term
      }
    })
  }
  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        ...pins,
      ]

      newPins.sort(function(a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins)
    })
  }
// const getNewPins = () => {
//   let promises = [];
//   let pinData = [];

//   let pins = ['dogs', 'cats', 'cars', 'fitness' ]

//   pins.forEach((pinTerm) => {
//     promises.push(
//       getImages(pinTerm).then((res) => {
//         let results = res.data.results
        
//         pinData = pinData.concat(results);

//         pinData.sort(function(a, b) {
//           return 0.5 - Math.random();
//         });
//       })
//     )
//    });
//     Promise.all((promises).then(() => {
//       setNewPins(pinData);
//      })
// };

//   useEffect(() => {

//     getNewPins()
//   }, [])
  
  return (
    <div className="App">
      < Navbar onSubmit={onSearchSubmit} />
      <Mainboard pins={pins}/>
      {/* < Home /> */}
    </div>
  );
}

export default App;
