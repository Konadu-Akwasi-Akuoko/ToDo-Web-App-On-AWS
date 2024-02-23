#!/bin/bash

echo "Creating S3 bucket for the AngularWebsite, make sure you have the AWS CLI installed and configured"

echo "Please enter the name of the bucket you want to create:"
read -r bucket_name

aws s3api create-bucket --bucket "$bucket_name" --region eu-west-2 --create-bucket-configuration LocationConstraint=eu-west-2 --output table | cat
aws s3api put-bucket-versioning --bucket "$bucket_name" --versioning-configuration Status=Enabled --output table | cat
