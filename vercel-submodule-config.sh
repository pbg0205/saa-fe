SUBMODULE_GITHUB=/github.com/pbg0205/ssa-data
SUBMODULE_PATH=data

if [ "$GITHUB_ACCESS_TOKEN" == "" ]; then
  echo "Error: GITHUB_ACCESS_TOKEN is empty"
  exit 1
fi

mkdir data

git clone https://$GITHUB_ACCESS_TOKEN@$SUBMODULE_GITHUB # add origin of the submodule
git fetch --depth=1 origin $COMMIT # fetch only the required version
git checkout $COMMIT # checkout on the right commit

cd .. # go folder up
echo "$(pwd)"

rm -rf ./ssa-data/.git # remove .git
mv ./ssa-data/* $SUBMODULE_PATH/ # move the submodule to the submodule path
echo "$(ls)"

# clean up
rm -rf ssa-data # remove the tmp folder