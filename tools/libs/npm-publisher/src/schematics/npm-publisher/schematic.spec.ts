import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import { createEmptyWorkspace } from "@nrwl/workspace/testing";
import { join } from "path";

import { NpmPublisherSchematicSchema } from "./schema";

describe("npm-publisher schematic", () => {
  let appTree: Tree;
  const options: NpmPublisherSchematicSchema = { name: "test" };

  const testRunner = new SchematicTestRunner(
    "@myworkspace/npm-publisher",
    join(__dirname, "../../../collection.json")
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it("should run successfully", async () => {
    await expect(
      testRunner.runSchematicAsync("npmPublisher", options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
