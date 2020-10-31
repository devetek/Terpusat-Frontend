import debounce from "lodash/debounce";
import { useRef } from "react";

function useDebounce(func, wait, options) {
  return useRef(debounce(func, wait, options)).current;
}

export default useDebounce;
