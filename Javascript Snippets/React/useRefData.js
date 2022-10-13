import React from "react";

/**
 * Hook to be used as an alternative now that the useEvent RFC is dead :(
 */
function useRefData(data) {
  const ref = React.useRef(data);
  React.useLayoutEffect(() => {
    ref.current = data;
  }, [data]);
  return ref;
}

export default useRefData;
