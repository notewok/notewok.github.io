import './App.css';
import {useEffect, useState} from "react";
import {getFigmaObject, getColorById } from "./script";

function App() {
  const [figmaObject, setFigmaObject] = useState(null);
  const [colorIds, setColorIds] = useState(null);
  const [colors, setColors] = useState([]);
  const [style, setStyle] = useState({color1:"rgb(235, 87, 87)",color2:"rgb(62, 204, 110)"});

  useEffect( () => {
    getFigmaObject()
        .then( resp => setFigmaObject(resp.meta) )
  }, [])

  useEffect(  () => {
    if(!!figmaObject) {
      let nodeIds = figmaObject.styles.map(color => color["node_id"]);
      setColorIds(nodeIds)
    }
  }, [figmaObject])

  useEffect(() => {
    const mapColors = () => {
        colorIds.map(nodeId => {
              getColorById(nodeId)
                  .then( resp => setColors(
                          [...colors,
                            ...resp.nodes[nodeId].document.fills]
                      )
                  )
            }

        )
    }
    if( !!colorIds && colorIds.length > 1 ) {
      mapColors()
    }
  }, [colorIds])

  if( !!colors && colors.length > 1 ) {
    let chars =
        colors.map( colorValues =>
            `rgb(${colorValues.color.r*100},${colorValues.color.g*100},${colorValues.color.b*100})`
    )

    setStyle( {
          color1: chars[0],
        color2: chars[1]
    }
    )
  }

  console.log( style )

  return (
    <div className="App">
      <header className="App-header" style={{background: style.color1}} >
        Haloooooo
      </header>
    </div>
  );
}

export default App;
