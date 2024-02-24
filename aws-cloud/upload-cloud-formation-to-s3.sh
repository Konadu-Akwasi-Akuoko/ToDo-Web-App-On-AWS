#!/bin/bash

cloud_formation_template="ec2.yaml"

echo "This script creates an S3 bucket for the AngularWebsite, make sure you have the AWS CLI installed and configured"
echo "Step 1: Creating an S3 bucket for the AngularWebsite"

echo "Please enter the name of the bucket you want to create:"
read -r bucket_name

aws s3api create-bucket --bucket "$bucket_name" --region eu-west-2 --create-bucket-configuration LocationConstraint=eu-west-2 --output table | cat
# We don't want versioning for the bucket, if you want it uncomment the line below.
# aws s3api put-bucket-versioning --bucket "$bucket_name" --versioning-configuration Status=Enabled --output table | cat

printf "\n"
echo "Step 2: Uploading the CloudFormation template to the S3 bucket"

aws s3 cp "$cloud_formation_template" "s3://$bucket_name/cloud-formations/" --output table | cat

printf "\n"
echo "Step 3: Creating a CloudFormation stack"

echo "Please enter a name for the CloudFormation stack you want to create:"
read -r stack_name

aws cloudformation create-stack --stack-name "$stack_name" --template-url "https://$bucket_name.s3.amazonaws.com/cloud-formations/$cloud_formation_template" --output table | cat
aws cloudformation wait stack-create-complete --stack-name "$stack_name" --output table | cat
aws cloudformation describe-stacks --stack-name "$stack_name" --output table | cat
