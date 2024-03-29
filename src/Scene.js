import React, { useMemo, useState, useEffect } from "react";
import { morphing, spacing } from "primitivo-svg";
// Local components
import ControlPanel from "./ControlPanel";
import Composition from "./Composition";
import useDebounce from "./misc/useDebounce";

function Scene(props) {
  const [depth, setDepth] = useState(1);
  // const debouncedDepth = useDebounce(depth, depth * 200);
  const updateDepth = factor => {
    setDepth(depth => {
      let result = depth + factor;
      // Limit number of segment
      return result < 0 || result > 9 ? depth : result;
    });
  };

  return (
    <div className="scene">
      <ControlPanel depth={depth} updateDepth={updateDepth} />
      <Composition depth={depth} />
    </div>
  );
}

export default Scene;
