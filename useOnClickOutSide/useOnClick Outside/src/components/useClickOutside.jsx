import { useEffect } from "react";

function useClickOutside(ref, callback) {
  useEffect(() => {
    const handleClick = (e) => {
      // Eğer ref.current yoksa çık
      if (!ref.current) return;

      // Eğer tıklanan eleman ref içindeyse callback çalışmaz
      if (!ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
}

export default useClickOutside;