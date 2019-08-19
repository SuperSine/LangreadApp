import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref,onClick) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onClick();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("touchend", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, props.onClick);

  return <div ref={wrapperRef}>{props.children}</div>;
}