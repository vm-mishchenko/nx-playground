#!/bin/bash

docker run --env-file env/apps/api/env -p 3333:3333 gcr.io/playground-262522/api:latest
