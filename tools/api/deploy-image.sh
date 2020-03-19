#!/bin/bash

# deploy image to Google Cloud Run.
# Image should be already uploaded to Cloud Container Registry
gcloud run deploy api --image gcr.io/playground-262522/api:latest \
  --set-env-vars FOO=foo-env \
  --platform managed \
  --region us-west1 \
  --allow-unauthenticated
