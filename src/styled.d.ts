// import original module declarations
import "styled-components";

//styled.d.ts , d.ts => declartion file

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor?: string;
  }
}
