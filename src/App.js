import './App.css';
import {useEffect, useState} from "react";
import {getFigmaObject, getColorById } from "./script";
import Calendar from "./components/Calendar";
import './styles/styles.css'

function App() {
  const [figmaObject, setFigmaObject] = useState(null);
  const [colorIds, setColorIds] = useState(null);
  const [colors, setColors] = useState([]);
  const [style, setStyle] = useState({color1:"rgb(235, 87, 87)",color2:"rgb(17, 146, 61)"});

  useEffect( () => {
    getFigmaObject()
        .then( resp => setFigmaObject(resp.meta) )
  },[])

  useEffect( () => {
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

  useEffect ( () => {
    if( !!colors && colors.length > 1 ) {
      let chars =
          colors.map( colorValues =>
              `rgb(${colorValues.color.r*255},${colorValues.color.g*255},${colorValues.color.b*255})`
          )
      setStyle( {
        color1: chars[0],
        color2: chars[1]
      })
    }
  }, [colors])

  console.log(style)

  return (
      <div id='App'>
        <header className="App-header" style={{background: style.color1}} >
          <p style={{color: style.color2}}>Wheee</p>

        </header>
          <Calendar/>
      </div>
  );
}

export default App;
