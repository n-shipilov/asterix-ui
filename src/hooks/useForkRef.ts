import React from "react";

export type UseForkRefProps<K> = Array<React.Ref<K> | undefined>;
export type UseForkRefResult<W> = React.RefCallback<W> | null;

export function useForkRef<T>(
  ...refs: UseForkRefProps<T>
): UseForkRefResult<T> {
  return React.useMemo(() => {
    if (refs.every((ref) => ref === null || ref === undefined)) {
      return null;
    }

    return (value: T | null) => {
      for (const ref of refs) {
        setRef(ref, value);
      }
    };
  }, refs);
}

export function setRef<T>(
  ref:
    | React.MutableRefObject<T | null>
    | React.RefCallback<T | null>
    | null
    | undefined,
  value: T | null
) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
