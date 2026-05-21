/**
 * Prefixa caminhos de assets com o BASE_URL do Vite.
 * Em desenvolvimento: '/'
 * Em produção (GitHub Pages): '/site-lagoa-azul/'
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
