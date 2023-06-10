/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: [
      'png',
      'jpg',
      'jpeg',
      'gif',
      'bmp',
      'tiff',
      'webp',
      'svg',
      'woff',
      'woff2',
      'ttf',
      'eot',
      'mp4',
      'webm',
      'wav',
      'mp3',
      'm4a',
      'aac',
      'oga',
      'json',
      'obj',
      'mtl',
      'JPG',
      'vrx',
      'hdr',
      'gltf',
      'glb',
      'bin',
      'arobject',
    ],
  },
};
