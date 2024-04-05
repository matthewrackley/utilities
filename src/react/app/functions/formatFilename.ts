/**
 * @file formatFilename.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
export function formatFilename(filePath: string, forTitle = false) {
  // Extract the base file name without the path and extension
  const baseName = filePath.replace(/^.*[\\\/]|\.[tj]sx?$/gi, '');

  // Insert spaces before uppercase letters or groups of uppercase letters
  const modifiedName = capitalize(baseName
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') // Before group of caps followed by caps and lowercase
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')     // Before single cap following lowercase or digit
    .replace(/_/g, ' '));                       // Replace underscores with spaces
  return forTitle ? modifiedName : baseName;
}

export default formatFilename;
