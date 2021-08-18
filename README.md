# ibm-cloud-functions-typescript-rollup

Template for IBM Cloud Functions with TypeScript and rollup.

[日本語](https://scrapbox.io/ci7lus/IBM_Cloud_Functions%E3%81%A7%E3%83%90%E3%83%83%E3%82%AF%E3%82%B0%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E5%87%A6%E7%90%86%E3%82%92%E3%81%99%E3%82%8B2021%E5%B9%B48%E6%9C%88%E7%89%88)

## How to use

1. Register [IBM Cloud Lite](https://cloud.ibm.com/registration/startUpgradeToLite)
   - Get API Key on [https://cloud.ibm.com/iam/apikeys](https://cloud.ibm.com/iam/apikeys).
1. Install `ibmcloud` cli & login
   ```bash
      brew install ibm-cloud-cli
      ibmcloud plugin install cloud-functions
      # it conflicts with /Application/Docker.app that not installed by brew cask
      ibmcloud login --apikey <APIKEY>
      ibmcloud resource groups
      ibmcloud target -g <default group id>
      ibmcloud fn namespace list
      ibmcloud fn namespace target <namespace which u want to use>
   ```
1. Use this tempplate and clone a repository
   ```bash
   git clone <your generated repo>
   cd reponame
   ```
1. Build & deploy
   ```bash
   yarn
   yarn build
   ```
1. Install direnv and make `.envrc` and apply
   ```bash
   brew install direnv
   # follow intro like add a line to .zshrc
   touch .envrc
   # write `export WEBHOOK_URL='your discord webhook url'`
   direnv allow .
   ```
1. Deploy
   ```bash
   yarn deploy
   # $ ibmcloud fn deploy --manifest manifest.yaml
   # Success: Deployment completed successfully.
   ```
1. Enjoy!

### Customize manifest.yaml

Read [https://github.com/apache/openwhisk-wskdeploy/tree/master/specification/html](https://github.com/apache/openwhisk-wskdeploy/tree/master/specification/html).

## Reference

- (Japanese) [IBM Cloud Functions の Action/Trigger/Rule を yaml ファイル一発でデプロイする - Qiita](https://qiita.com/khayama/items/dd81cb137d44dd1e5332)
- [Hands on IBM Cloud Functions with CLI | inDev. Journal](https://frankindev.com/2020/10/20/hands-on-ibm-cloud-functions/)
  - `ibmcloud iam service ids` => `ibmcloud iam service-ids`
- (Japanese) [IBM Cloud Functions でバックグラウンド処理をする 2021 年 8 月版](https://scrapbox.io/ci7lus/IBM_Cloud_Functions%E3%81%A7%E3%83%90%E3%83%83%E3%82%AF%E3%82%B0%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E5%87%A6%E7%90%86%E3%82%92%E3%81%99%E3%82%8B2021%E5%B9%B48%E6%9C%88%E7%89%88)
