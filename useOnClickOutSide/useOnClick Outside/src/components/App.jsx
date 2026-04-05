import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

function App() {
  const [show, setShow] = useState(true);
  const ref = useRef();

  useClickOutside(ref, () => {
    setShow(false);
  });

  return (
    <div style={{ padding: "50px" }}>
      {!show && (
        <button onClick={() => setShow(true)}>
          Show Message
        </button>
      )}

      {show && (
        <div ref={ref}>
          <p>If you click outside, I will disappear</p>
        </div>
      )}
    </div>
  );
}

export default App;