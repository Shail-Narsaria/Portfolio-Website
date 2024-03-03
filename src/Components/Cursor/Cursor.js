import React, { useEffect } from 'react';
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.2/build/threejs-toys.module.cdn.min.js';
import './Cursor.css';

const Cursor = () => {
  useEffect(() => {
    const root = document.getElementById('Cursor');
    const op = {
      el: root,
      shaderPoints: 16,
      curvePoints: 80,
      sleepRadiusX: 10,
      sleepRadiusY: 10,
    };
    neonCursor(op);
  }, []);

  return (
    <div id="cursor">
      {/* Additional content if needed */}
    </div>
  );
};

export default Cursor;
