"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
/**
 * Depending on your needs, you can change this to either `Library` or `Application`
 */
const projectType = workspace_1.ProjectType.Library;
function normalizeOptions(options) {
    const name = workspace_1.toFileName(options.name);
    const projectDirectory = options.directory
        ? `${workspace_1.toFileName(options.directory)}/${name}`
        : name;
    const projectName = projectDirectory.replace(new RegExp("/", "g"), "-");
    const projectRoot = `${workspace_1.projectRootDir(projectType)}/${projectDirectory}`;
    const parsedTags = options.tags
        ? options.tags.split(",").map(s => s.trim())
        : [];
    return Object.assign(Object.assign({}, options), { projectName,
        projectRoot,
        projectDirectory,
        parsedTags });
}
function addFiles(options) {
    return schematics_1.mergeWith(schematics_1.apply(schematics_1.url(`./files`), [
        schematics_1.applyTemplates(Object.assign(Object.assign(Object.assign({}, options), workspace_1.names(options.name)), { offsetFromRoot: workspace_1.offsetFromRoot(options.projectRoot) })),
        schematics_1.move(options.projectRoot)
    ]));
}
function default_1(options) {
    const normalizedOptions = normalizeOptions(options);
    return schematics_1.chain([
        workspace_1.updateWorkspace(workspace => {
            workspace.projects
                .add({
                name: normalizedOptions.projectName,
                root: normalizedOptions.projectRoot,
                sourceRoot: `${normalizedOptions.projectRoot}/src`,
                projectType
            })
                .targets.add({
                name: "build",
                builder: "@myworkspace/npm-publisher:build"
            });
        }),
        workspace_1.addProjectToNxJsonInTree(normalizedOptions.projectName, {
            tags: normalizedOptions.parsedTags
        }),
        addFiles(normalizedOptions)
    ]);
}
exports.default = default_1;
//# sourceMappingURL=schematic.js.map