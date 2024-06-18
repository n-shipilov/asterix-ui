import { withNaming } from "@bem-react/classname";

export const NAMESPACE = "st-";

export const cn = withNaming({ n: NAMESPACE, e: "__", m: "_" });
