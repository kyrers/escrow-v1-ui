import "styled-components";
import { KlerosTheme } from "./types";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends KlerosTheme {}
}
