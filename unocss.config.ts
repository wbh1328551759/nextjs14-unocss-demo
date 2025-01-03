import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  theme: {
    breakpoints: {
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  rules: [
    [/^w-m-(\d+)$/, ([, d]) => ({ width: `${Number(d) / 750 * 100}vw` })],
    [/^h-m-(\d+)$/, ([, d]) => ({ height: `${Number(d) / 750 * 100}vw` })],
    [/^min-w-m-(\d+)$/, ([, d]) => ({ 'min-width': `${Number(d) / 750 * 100}vw` })],
    [/^min-h-m-(\d+)$/, ([, d]) => ({ 'min-height': `${Number(d) / 750 * 100}vw` })],
    [/^max-w-m-(\d+)$/, ([, d]) => ({ 'max-width': `${Number(d) / 750 * 100}vw` })],
    [/^max-h-m-(\d+)$/, ([, d]) => ({ 'max-height': `${Number(d) / 750 * 100}vw` })],

    // margins
    [/^m-m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) / 750 * 100}vw` })],
    [/^mt-m-(\d+)$/, ([, d]) => ({ 'margin-top': `${Number(d) / 750 * 100}vw` })],
    [/^mr-m-(\d+)$/, ([, d]) => ({ 'margin-right': `${Number(d) / 750 * 100}vw` })],
    [/^mb-m-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${Number(d) / 750 * 100}vw` })],
    [/^ml-m-(\d+)$/, ([, d]) => ({ 'margin-left': `${Number(d) / 750 * 100}vw` })],
    [/^mx-m-(\d+)$/, ([, d]) => ({ 'margin-left': `${Number(d) / 750 * 100}vw`, 'margin-right': `${Number(d) / 750 * 100}vw` })],
    [/^my-m-(\d+)$/, ([, d]) => ({ 'margin-top': `${Number(d) / 750 * 100}vw`, 'margin-bottom': `${Number(d) / 750 * 100}vw` })],

    // paddings
    [/^p-m-(\d+)$/, ([, d]) => ({ padding: `${Number(d) / 750 * 100}vw` })],
    [/^pt-m-(\d+)$/, ([, d]) => ({ 'padding-top': `${Number(d) / 750 * 100}vw` })],
    [/^pr-m-(\d+)$/, ([, d]) => ({ 'padding-right': `${Number(d) / 750 * 100}vw` })],
    [/^pb-m-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${Number(d) / 750 * 100}vw` })],
    [/^pl-m-(\d+)$/, ([, d]) => ({ 'padding-left': `${Number(d) / 750 * 100}vw` })],
    [/^px-m-(\d+)$/, ([, d]) => ({ 'padding-left': `${Number(d) / 750 * 100}vw`, 'padding-right': `${Number(d) / 750 * 100}vw` })],
    [/^py-m-(\d+)$/, ([, d]) => ({ 'padding-top': `${Number(d) / 750 * 100}vw`, 'padding-bottom': `${Number(d) / 750 * 100}vw` })],

    // font
    [/^text-m-(\d+)$/, ([, d]) => ({ 'font-size': `${Number(d) / 750 * 100}vw` })],
    [/^leading-m-(\d+)$/, ([, d]) => ({ 'line-height': `${Number(d) / 750 * 100}vw` })],

    // borders
    [/^rounded-m-(\d+)$/, ([, d]) => ({ 'border-radius': `${Number(d) / 750 * 100}vw` })],
    [/^rounded-t-m-(\d+)$/, ([, d]) => ({ 'border-top-left-radius': `${Number(d) / 750 * 100}vw`, 'border-top-right-radius': `${Number(d) / 750 * 100}vw` })],
    [/^rounded-r-m-(\d+)$/, ([, d]) => ({ 'border-top-right-radius': `${Number(d) / 750 * 100}vw`, 'border-bottom-right-radius': `${Number(d) / 750 * 100}vw` })],
    [/^rounded-b-m-(\d+)$/, ([, d]) => ({ 'border-bottom-left-radius': `${Number(d) / 750 * 100}vw`, 'border-bottom-right-radius': `${Number(d) / 750 * 100}vw` })],
    [/^rounded-l-m-(\d+)$/, ([, d]) => ({ 'border-top-left-radius': `${Number(d) / 750 * 100}vw`, 'border-bottom-left-radius': `${Number(d) / 750 * 100}vw` })],

    // positions
    [/^top-m-(\d+)$/, ([, d]) => ({ top: `${Number(d) / 750 * 100}vw` })],
    [/^right-m-(\d+)$/, ([, d]) => ({ right: `${Number(d) / 750 * 100}vw` })],
    [/^bottom-m-(\d+)$/, ([, d]) => ({ bottom: `${Number(d) / 750 * 100}vw` })],
    [/^left-m-(\d+)$/, ([, d]) => ({ left: `${Number(d) / 750 * 100}vw` })],

    // gap
    [/^gap-m-(\d+)$/, ([, d]) => ({ gap: `${Number(d) / 750 * 100}vw` })],
    [/^gap-x-m-(\d+)$/, ([, d]) => ({ 'column-gap': `${Number(d) / 750 * 100}vw` })],
    [/^gap-y-m-(\d+)$/, ([, d]) => ({ 'row-gap': `${Number(d) / 750 * 100}vw` })],
  ],
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
