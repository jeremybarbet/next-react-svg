/// <reference types="react" />

declare module '*.svg' {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export = value
}
