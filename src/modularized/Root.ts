import * as fs from 'node:fs';
import * as path from 'node:path';
/**
 * @file Root.ts
 * @description This file contains the `Root` module for the project.
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

export namespace Root {
  export const here = path.resolve(__filename);
  export const packageRoot = path.resolve(here, '../../../');
  export const root = path.resolve(packageRoot, '../../');

  export type jsConf = '.config.cjs' | '.config.js' | '.config.mjs' | '.config.json';
  export type CommonFoldersArray = ['node_modules', 'src', 'dist', 'config', 'utils', 'types', 'scripts', 'tests', 'models', 'controllers', 'middlewares', 'routes', 'public', 'views', 'assets', 'styles', 'templates', 'components', 'services', 'interfaces', 'constants', 'repositories', 'providers', 'factories', 'helpers', 'validators', 'decorators', 'plugins', 'extensions', 'entities'];
  export type CommonFolders = CommonFoldersArray[number];
  export type CommonFoldersMix = (CommonFolders)[];
  export type CommonFilesArray = ['package.json', 'package-lock.json', `${'j' | 't'}sconfig.json`, `babel${jsConf}`, `webpack${jsConf}`, 'README.md'];
  export type CommonFiles = CommonFilesArray[number];
  export type CommonFilesMix = (CommonFiles)[];
  export type CommonRootArray = ["package.json", "package-lock.json", "tsconfig.json", "README.md", 'node_modules', 'src'];
  export type CommonRoot = CommonRootArray[number];
  export type CommonRootMix = (CommonRoot)[];
  export interface Paths {
    root?: string[] | string;
    files?: string[] | string;
    dirs?: string[] | string;
  }
  export interface CommonPaths extends Paths {
    root: CommonRootMix | CommonRoot | CommonRootArray;
    dirs: CommonFoldersMix | CommonFolders | CommonFoldersArray;
    files: CommonFilesMix | CommonFiles | CommonFilesArray;
  }

  export function locateRoot(files: string | string[] = 'package.json') {
    let currentDir = process.cwd();
    let previousDir;
    while (currentDir !== previousDir) {
      if (fs.existsSync(path.join(currentDir, ...files))) {
        return currentDir;
      }
      previousDir = currentDir;
      currentDir = path.resolve(currentDir, '..');
    }
    console.warn('Could not find the root directory.\n Returning the directory from node_modules.');
    return root;
  }
}
export const {
  locateRoot,
  here,
  packageRoot,
  root,
} = Root;
export type * from './Root.ts';
export default locateRoot;
