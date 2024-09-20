SUBMODULE_GITHUB=github.com/pbg0205/ssa-data
SUBMODULE_PATH=/vercel/path0/data
USERNAME=pbg0205

if [ "$GITHUB_ACCESS_TOKEN" == "" ]; then
  echo "Error: GITHUB_ACCESS_TOKEN is empty"
  exit 1
fi

echo "current path:" + "$(pwd)"

git clone https://$USERNAME:$GITHUB_ACCESS_TOKEN@$SUBMODULE_GITHUB # add origin of the submodule

cd .. # go folder up
echo "current path:" + "$(pwd)"

rm -rf ./ssa-data/.git # remove .git
cp -r ./ssa-data/* $SUBMODULE_PATH/ # move the submodule to the submodule path
echo "$(ls)"

# clean up
rm -rf ssa-data # remove the tmp folder