REPOSITORY_NAME=ssa-data
SUBMODULE_GITHUB=github.com/pbg0205/$REPOSITORY_NAME
SUBMODULE_PATH=/vercel/path0/
SUBMODULE_NAME=data
USERNAME=pbg0205

if [ "$GITHUB_ACCESS_TOKEN" == "" ]; then
  echo "Error: GITHUB_ACCESS_TOKEN is empty"
  exit 1
fi

echo "current path:" + "$(pwd)"

git clone https://$USERNAME:$GITHUB_ACCESS_TOKEN@$SUBMODULE_GITHUB # add origin of the submodule

cd .. # go folder up
echo "current path:" + "$(pwd)"

rm -rf $SUBMODULE_PATH/$REPOSITORY_NAME/.git # remove .git
cp -r $SUBMODULE_PATH/$REPOSITORY_NAME/* $SUBMODULE_PATH/$SUBMODULE_NAME # move the submodule to the submodule path
echo "$(ls)"

# clean up
rm -rf ssa-data # remove the tmp folder