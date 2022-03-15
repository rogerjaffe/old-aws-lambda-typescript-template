## A template for AWS Lambda with Typescript

This package includes a setup for writing aws lambda functions with Typescript.

### Configuration

* Set AWS parameters in `aws.dev.env` and `aws.prod.env`
* AWS_PROFILE is set in ~/.aws/credentials
  * Find credentials from AWS by clicking on profile icon, then Security credentials
  * Set Get Access Key ID and Access Key Secret.  Only two pairs are allowed at one time
* Verify prettier is installed, enable on save in Webstorm preferences
* Create the function in AWS console before deployments
* Set typescript to recompile on changes in Webstorm preferences
* Create a deploy folder

### How-to
- clone the template and install modules (`npm install`)
- change package name in `package.json`
- set AWS lambda settings in `aws.dev.env` and `aws.prod.env`. If you do not have
  aws profile, you need to create one as described here https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html you'll need
  separate profiles for development and production environments
- start writing code in `./src/index.ts`

### Requirements
- node v.12
- nvm installed globally

### Unit tests
- place new tests in `/tests` dir
- run via `npm run test` 

### Deploy
- run `deploy:dev` or `deploy:prod`

### References

[Lambda + Typescript](https://github.com/pavvell/lambda-templates/tree/master/lambda-typescript)

See the article at `https://tltr.medium.com/aws-lambda-and-typescript-minimal-setup-c945c2cdd70a`

