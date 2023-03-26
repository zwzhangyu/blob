#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run docs:build
# 进入生成的文件夹
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 修改为你的 github用户名/仓库名 git@github.com:zwzhangyu/blob.git
git push -f git@github.com:zwzhangyu/blob.git master:main
cd -
