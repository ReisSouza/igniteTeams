import 'styled-components'

import main from '@theme/main'

declare module 'styled-components' {
  type ThemeType= typeof main;

  export interface DefaultTheme extends ThemeType{}
}