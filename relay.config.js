module.exports = {
  src: './',
  schema: './schema/__generated__/schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  extensions: ['ts', 'tsx'],
  language: 'typescript',
  artifactDirectory: 'queries/__generated__',
};