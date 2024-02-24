# AWS operations

Remember to configure your AWS cli before running the scripts here.

Also for references on some questions you'll face when running the commands refer to [resources.json](/resources.json)

## Steps

1. First run the [upload-cloud-formation-to-s3.sh](upload-cloud-formation-to-s3.sh) file to automatically create an s3 bucket and upload the cloud formation template for you
    - The script will ask you for a bucket name, this will be the bucket that will store the cloud formation template, I used `akwasi-angular-website` so you can choose a bucket name you like.
