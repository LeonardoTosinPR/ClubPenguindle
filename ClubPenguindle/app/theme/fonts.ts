/**
 * Tamanhos de Fonte (Tipografia)
 */
export const fonts = {
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
  },
  weight: {
    // Adicionamos 'as const' para travar o tipo
    // Isso diz ao TypeScript que 'bold' é '700', e não uma string qualquer.
    light: "300" as const,
    regular: "400" as const,
    bold: "700" as const,
  },
};
