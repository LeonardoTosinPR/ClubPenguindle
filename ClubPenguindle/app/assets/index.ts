/**
 * Central de exportação de assets
 */
export const Images = {
  // A imagem de fundo do mapa
  mapBackground: require("./images/map.png"),
};

/**
 * Mapeamento estático de todas as imagens de locais.
 * Isso é necessário porque o Metro não suporta 'require' dinâmico.
 * * As chaves (ex: '1') devem corresponder ao 'id' do locais.json.
 * Os arquivos (ex: '1.jpg') devem estar em /assets/images/locais/
 */
export const LocalImages: { [key: number]: any } = {
  1: require("./images/locais/1.jpg"),
  2: require("./images/locais/2.jpg"),
  3: require("./images/locais/3.jpg"),
  4: require("./images/locais/4.jpg"),
  5: require("./images/locais/5.jpg"),
  6: require("./images/locais/6.jpg"),
  7: require("./images/locais/7.jpg"),
  8: require("./images/locais/8.jpg"),
  9: require("./images/locais/9.jpg"),
  10: require("./images/locais/10.jpg"),
  11: require("./images/locais/11.jpg"),
  12: require("./images/locais/12.jpg"),
  13: require("./images/locais/13.jpg"),
  14: require("./images/locais/14.jpg"),
  15: require("./images/locais/15.jpg"),
  16: require("./images/locais/16.jpg"),
  17: require("./images/locais/17.jpg"),
  18: require("./images/locais/18.jpg"),
  19: require("./images/locais/19.jpg"),
  20: require("./images/locais/20.jpg"),
  21: require("./images/locais/21.jpg"),
  22: require("./images/locais/22.jpg"),
  23: require("./images/locais/23.jpg"),
  24: require("./images/locais/24.jpg"),
  25: require("./images/locais/25.jpg"),
  26: require("./images/locais/26.jpg"),
  27: require("./images/locais/27.jpg"),
  28: require("./images/locais/28.jpg"),
  29: require("./images/locais/29.jpg"),
  30: require("./images/locais/30.jpg"),
  31: require("./images/locais/31.jpg"),
};
