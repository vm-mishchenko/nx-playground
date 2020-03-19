#!/bin/bash

docker run -e FOO=foo-env -p 3333:3333 gcr.io/playground-262522/api:latest
