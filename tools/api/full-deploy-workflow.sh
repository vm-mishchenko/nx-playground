#!/bin/bash

sh tools/api/build-image.sh
sh tools/api/push-image-to-gcloud.sh
sh tools/api/deploy-image.sh
