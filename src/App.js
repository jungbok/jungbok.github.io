import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs'
import Map from './Worldmap'

function App() {

  let devInfo = "I am a software engineer and developer studying in University of Southern California"
  let travInfo = "I am a traveler from Seoul, South Korea, living in Los Angeles, California"
  let dreamInfo = "Things that I am interested in:"
    let [title, titleVar] = useState(["Cogo Labs", "AIMs", "Fasoo"])
    let [post, postVar] = useState(["From June 2020 to August 2020", "June 2019 to August 2019", "June 2018 to August 2018"])
    let [viewP1, viewP1Var] = useState(0)
    return (
      <div className="nav">
        <div className="black-nav">
          <h1> Welcome to JungBok's Blog </h1>
        </div>
        <Tabs>
            <h3> I am a... </h3>
          <div label="Developer">
            <div className="list">
                <h4> {title[0]} </h4>
                <p>{post[0]} <span onClick={() => {viewP1Var(viewP1+1)}}> viewed </span>{viewP1} </p>
                <hr/>
            </div>
              <div className="list">
                  <h4> {title[1]} </h4>
                  <p>{post[1]}</p>
                  <hr/>
              </div>
              <div className="list">
                  <h4> {title[2]} </h4>
                  <p>{post[2]}</p>
                  <hr/>
              </div>
             <Modal />
          </div>
          <div label="Traveler">
            {travInfo}
            <Map />
          </div>
          <div label ="Dreamer">
            {dreamInfo}
          </div>
        </Tabs>
          <footer>
          </footer>
      </div>
  );
}
function Modal(){
    return (
        <div className="modal">
            <h2> Title </h2>
            <p> dates </p>
            <p> descriptions </p>
        </div>
    )
}

function WorldMap(){
    return(
        <div className="worldMap">

        </div>
    )
}

export default App;
