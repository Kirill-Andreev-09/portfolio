import '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface PaletteColor {
    xDark?: string;
  }

  interface SimplePaletteColorOptions {
    xDark?: string;
  }

  interface Palette {
    gray: Palette['primary'];
  }

  interface PaletteOptions {
    gray: PaletteOptions['primary'];
  }
}
