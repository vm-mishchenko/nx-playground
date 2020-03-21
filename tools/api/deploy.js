const shell = require("shelljs");
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({keyFilename: "service-accounts/playground-262522-7323e9e2a917.json"});

storage
  .bucket('playground-config')
  .file("env.json")
  .download({}).then((envFile) => {
  const envFileAsString = envFile.toString('utf8');

  return JSON.parse(envFileAsString);
}).then((env) => {
  const envParameters = buildEnvParameters(env);

  const deployCommand = `
  gcloud run deploy api --image gcr.io/playground-262522/api:latest \
  --set-env-vars ${envParameters} \
  --platform managed \
  --region us-west1 \
  --allow-unauthenticated
`;

  run(deployCommand);
});

function run(command, options) {
  console.log(command);

  return shell.exec(command, options);
}

function buildEnvParameters(env) {
  return env.map((envConfig,) => {
    return `${envConfig.key}=${envConfig.value}`;
  }).join(',');
}
