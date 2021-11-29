//This is for converting .ts to .js respectively
//it will generate the .js file out of .ts file when you run 'npm run start'

const path = require('path');
const src = path.resolve(__dirname, 'src');

// CONVERT index.ts
module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: src
  },
  devServer: {
    contentBase: src,
  },
}

// // CONVERT sphere_with_waves.ts
// module.exports = {
//   mode: 'development',
//   entry: './src/sphere.ts',
//   devtool: 'inline-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js']
//   },
//   output: {
//     filename: 'sphere.js',
//     path: src
//   },
//   devServer: {
//     contentBase: src,
//   },
// }



// CONVERT terrain_editor.ts
module.exports = {
  mode: 'development',
  entry: './src/terrain.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'terrain.js',
    path: src
  },
  devServer: {
    contentBase: src,
  },
}