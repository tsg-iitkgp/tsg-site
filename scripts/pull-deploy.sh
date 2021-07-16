# On any change in the build branch, run this on the server. This will fetch any changes, and 
# replace the existing files. This prevents having merge conflicts, since we anyways only need
# the final HTML, CSS and JS files from our build, which are updated everytime a changed i
# pushed to the main branch

git fetch --all

git reset --hard origin/build