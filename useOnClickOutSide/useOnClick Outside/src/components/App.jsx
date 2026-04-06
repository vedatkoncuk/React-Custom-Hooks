import { useState, useRef, useCallback } from "react";
import useClickOutside from "./useClickOutside";

function App() {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  const handleClose = useCallback(() => {
    console.log("Dışına tıklandı, mesaj gizlenecek");
    setShow(false);
  }, []);

  useClickOutside(wrapperRef, handleClose);

  return (
    <div style={{ padding: "100px" }}>
      {/* ref artık tüm wrapper divi kapsıyor */}
      <div ref={wrapperRef} style={{ display: "inline-block" }}>
        {!show && (
          <button onClick={() => setShow(true)}>Show</button>
        )}

        {show && <p>Mesaj burada</p>}
      </div>
    </div>
  );
}

export default App;