import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq
} from "@nrwl/nx-plugin/testing";
describe("npm-publisher e2e", () => {
  it("should create npm-publisher", async done => {
    const plugin = uniq("npm-publisher");
    ensureNxProject("@myworkspace/npm-publisher", "dist/libs/npm-publisher");
    await runNxCommandAsync(
      `generate @myworkspace/npm-publisher:npmPublisher ${plugin}`
    );

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain("Builder ran");

    done();
  });

  describe("--directory", () => {
    it("should create src in the specified directory", async done => {
      const plugin = uniq("npm-publisher");
      ensureNxProject("@myworkspace/npm-publisher", "dist/libs/npm-publisher");
      await runNxCommandAsync(
        `generate @myworkspace/npm-publisher:npmPublisher ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe("--tags", () => {
    it("should add tags to nx.json", async done => {
      const plugin = uniq("npm-publisher");
      ensureNxProject("@myworkspace/npm-publisher", "dist/libs/npm-publisher");
      await runNxCommandAsync(
        `generate @myworkspace/npm-publisher:npmPublisher ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson("nx.json");
      expect(nxJson.projects[plugin].tags).toEqual(["e2etag", "e2ePackage"]);
      done();
    });
  });
});
