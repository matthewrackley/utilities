/**
 * @file Root.ts
 * @description This file contains the `Root` module for the project.
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
export declare namespace Root {
    const here: string;
    const packageRoot: string;
    const root: string;
    type jsConf = '.config.cjs' | '.config.js' | '.config.mjs' | '.config.json';
    type CommonFoldersArray = ['node_modules', 'src', 'dist', 'config', 'utils', 'types', 'scripts', 'tests', 'models', 'controllers', 'middlewares', 'routes', 'public', 'views', 'assets', 'styles', 'templates', 'components', 'services', 'interfaces', 'constants', 'repositories', 'providers', 'factories', 'helpers', 'validators', 'decorators', 'plugins', 'extensions', 'entities'];
    type CommonFolders = CommonFoldersArray[number];
    type CommonFoldersMix = (CommonFolders)[];
    type CommonFilesArray = ['package.json', 'package-lock.json', `${'j' | 't'}sconfig.json`, `babel${jsConf}`, `webpack${jsConf}`, 'README.md'];
    type CommonFiles = CommonFilesArray[number];
    type CommonFilesMix = (CommonFiles)[];
    type CommonRootArray = ["package.json", "package-lock.json", "tsconfig.json", "README.md", 'node_modules', 'src'];
    type CommonRoot = CommonRootArray[number];
    type CommonRootMix = (CommonRoot)[];
    interface Paths {
        root?: string[] | string;
        files?: string[] | string;
        dirs?: string[] | string;
    }
    interface CommonPaths extends Paths {
        root: CommonRootMix | CommonRoot | CommonRootArray;
        dirs: CommonFoldersMix | CommonFolders | CommonFoldersArray;
        files: CommonFilesMix | CommonFiles | CommonFilesArray;
    }
    function locateRoot(files?: string | string[]): string;
}
export declare const locateRoot: typeof Root.locateRoot, here: string, packageRoot: string, root: string;
export type * from './Root.ts';
export default locateRoot;
