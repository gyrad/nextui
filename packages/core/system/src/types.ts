import type * as Stitches from "@stitches/react";

import {createThemeBase, config, theme, css} from "./stitches.config";
import commonTheme from "./common";

/** Configuration Interface */
export declare namespace ConfigType {
  /** Media interface. */
  export type Media<T = {}> = {
    [name in keyof T]: T[name] extends string ? T[name] : string;
  };

  /** Theme interface. */
  export type Theme<T = {}> = {
    fonts?: {[token in number | string]: boolean | number | string};
    fontSizes?: {[token in number | string]: boolean | number | string};
    fontWeights?: {[token in number | string]: boolean | number | string};
    lineHeights?: {[token in number | string]: boolean | number | string};
    letterSpacings?: {[token in number | string]: boolean | number | string};
    space?: {[token in number | string]: boolean | number | string};
    radii?: {[token in number | string]: boolean | number | string};
    zIndices?: {[token in number | string]: boolean | number | string};
    borderWeights?: {[token in number | string]: boolean | number | string};
    colors?: {[token in number | string]: boolean | number | string};
    shadows?: {[token in number | string]: boolean | number | string};
    dropShadows?: {[token in number | string]: boolean | number | string};
    transitions?: {[token in number | string]: boolean | number | string};
  } & {
    [Scale in keyof T]: {
      [Token in keyof T[Scale]]: T[Scale][Token] extends boolean | number | string
        ? T[Scale][Token]
        : boolean | number | string;
    };
  };
  /** ThemeMap interface. */
  export type ThemeMap<T = {}> = {
    [Property in keyof T]: T[Property] extends string ? T[Property] : string;
  };

  /** Utility interface. */
  export type Utils<T = {}> = {
    [Property in keyof T]: T[Property] extends (value: infer V) => {}
      ?
          | T[Property]
          | ((value: V) => {
              [K in keyof Stitches.CSSProperties]?: Stitches.CSSProperties[K] | V;
            })
      : never;
  };
}

// stitches types
export type StitchesConfig = typeof config;
export type VariantProps<T> = Stitches.VariantProps<T>;
export type PropertyValue<T extends keyof Stitches.CSSProperties> = Stitches.PropertyValue<T>;
export type ScaleValue<T> = Stitches.ScaleValue<T>;
export type CSSProperties = Stitches.CSSProperties;
export type CSS = Stitches.CSS<StitchesConfig>;
export type StitchesTheme = typeof theme;
export type CSSComponent = typeof css;

// theme types
export type BaseTheme = ConfigType.Theme;
export type NextUITheme = StitchesTheme;
export type ThemeType = "dark" | "light";
export type CreateTheme = ReturnType<typeof createThemeBase>;

// tokens types
export type TokenKeyName = keyof typeof commonTheme["theme"];

export interface TokenValue {
  token: number | string;
  value: number | string;
  scale: string;
  prefix: string;
}

export type Theme = {
  type?: ThemeType | string;
  className?: string;
  theme?: BaseTheme;
  media?: ConfigType.Media;
  utils?: ConfigType.Utils;
  themeMap?: ConfigType.ThemeMap;
};

export type NextUIThemeContext = {
  type: ThemeType | string;
  theme?: NextUITheme;
  isDark?: boolean;
};