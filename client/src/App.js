import React from "react";
import pic from './img/pic.png'
import whereat from './img/whereatrough.png'

function App() {
return <BeginLogo overlapGroup={pic} whereatrough11={whereat} />;
}

export default App;

function BeginLogo(props) {
  const { overlapGroup, whereatrough11 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="begin-logoscreen">
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="w-her-ea-tr-ough-1-1" src={whereatrough11} />
        </div>
      </div>
    </div>
  );
}