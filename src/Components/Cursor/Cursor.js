import "./Cursor.css"
import {neonCursor} from "https://unpkg.com/threejs-toys@0.0.2/build/threejs-toys.module.cdn.min.js";


const Cursor = () => {

    const root=document.getElementById("cursor");
    const op={
        el:root,
        shaderPoints:16,
        curvePoints: 80,
        sleepRadiusX:10,
        sleepRadiusY:10,
    };
    neonCursor(op);

  return (
    <div className="cursor">
      
    </div>
  )
}

export default Cursor
