type Color = {
  main: string;
  sub: string;
};

export interface Theme {
  colors: Color;
}

export const theme: Theme = {
  colors: {
    main: "#6096b4",
    sub: "#93bfcf",
  },
};
