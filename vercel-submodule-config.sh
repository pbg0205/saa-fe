SUBMODULE_GITHUB=/github.com/pbg0205/ssa-data
SUBMODULE_PATH=data

if [ "$GITHUB_ACCESS_TOKEN" == "" ]; then
  echo "Error: GITHUB_ACCESS_TOKEN is empty"
  exit 1
fi

mkdir data

output=`git submodule status --recursive` # get submodule info
no_prefix=${output#*-} # get rid of the prefix
COMMIT=${no_prefix% *} # get rid of the suffix

# set up an empty temporary work directory
rm -rf tmp_submodule || true # remove the tmp folder if exists
mkdir tmp_submodule # create the tmp folder
cd tmp_submodule # go into the tmp folder

# checkout the current submodule commit
git init # initialise empty repo
git remote add origin https://$GITHUB_ACCESS_TOKEN@$SUBMODULE_GITHUB # add origin of the submodule
git fetch --depth=1 origin $COMMIT # fetch only the required version
git checkout $COMMIT # checkout on the right commit

cd .. # go folder up
echo "$(pwd)"

rm -rf ./tmp_submodule/.git # remove .git
mv ./tmp_submodule/* $SUBMODULE_PATH/ # move the submodule to the submodule path
echo "$(ls)"

# clean up
rm -rf tmp_submodule # remove the tmp folder