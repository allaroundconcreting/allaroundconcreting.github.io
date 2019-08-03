<h1 align="center">
  Website development files 🏗️🚀🌐
  <div></div>
</h1>


the website https://allaroundconcreting.com/ hosted at https://allaroundconcreting.github.io
You can begin improving the website in 5 minutes with these steps:


# Setup Locally
Follow these points to do a one time setup of the project in your local dev environment:

- **Install the Gatsby CLI**

   This site is built using <a href="https://gatsbyjs.org">Gatsby</a>. 
   ```shell
    npm install -g gatsby-cli
   ```


- **Create a folder**

    Lets keep all projects in a folder called "allaroundconcreting" (name of GitHub organization)
   ```shell
    mkdir allaroundconcreting
    cd allaroundconcreting

   ```

- **Clone this repository**
   
   This will download the files from the repo on Github
   ```shell
   git clone https://github.com/allaroundconcreting/allaroundconcreting.github.io.git
   // then enter your GitHub username & password
   ```

At this point you have the project setup locally on your machine. You should not need to clone the repo again, we have a git workflow to keep everything in order.

# Development workflow

1. **Open the project**
   
   Open a terminal and navigate into the project folder called "allaroundconcreting.github.io"
   ```shell
   cd allaroundconcreting.github.io
   ```

2. **Pull the latest updates**
   
   Ensure you pull the latest changes **_every time_**, or it could result in conflicts 
   ```shell
   git pull https://github.com/allaroundconcreting/allaroundconcreting.github.io.git
   ```

4. **Open the project in text editor**
   
   Launch the project in VS Code
   ```shell
   code .
   ```

5. **Start the website in `development` mode**
   
   Now lets run the website locally:
   ```shell
   gatsby develop
   ```

The site is now running live in your browser <a href="http://localhost:8000">http://localhost:8000</a> 

Now you can see changes live as you develop. 

Edit some files, and save changes to those files.

6. **Commit your changes (often)**

   Remember to commit often, ensure comments short and useful:
   ```shell
   git add .
   git commit -m "include a helpful description of your changes"
   ```

7. **Push commits (often)**

   It is wise to push your commits often too:
   ```shell
   git push origin develop

   ```

# Deploy workflow
Our deployment workflow is disappointingly not automated by running a single command because gh-pages just won't work on MN's laptop :[ 

8. **Build to "public" folder **

from path ~/allaroundconcreting.github.io ~$
   ```shell
   gatsby build 

   ```

9. **Init the public folder ready to push to master **

from path ~/allaroundconcreting.github.io ~$
   ```shell
   git init ./public 

   ```

10. **Commit changes (which is always all files in this folder "public") **

from path ~/allaroundconcreting.github.io ~$
   ```shell
   cd ./public
   git remote add origin https://github.com/allaroundconcreting/allaroundconcreting.github.io.git
   git add .
   git commit -m "describe the part of the website that should change"

   ```

11. **Push to Staging** (use the force ;)

from path ~/public ~$
   ```shell
   git push origin master
       // enter your GitHub username & password
   git push -f origin +master:refs/heads/master

   ```

This will build and deploy our app to the master branch to _staging_ https://allaroundconcreting.com.github.io

12. **Push to Production** (allaroundconcreting.com)

The custom domain will need to be pointed where the files are hosted on GitHub Pages (again)
Go to settings of repo, scroll down to section *Custom Domain* and enter allaroundconcreting.com
This will create a CNAME file in the master branch

The latest changes are now also live in _production_ https://allaroundconcreting.com 

❤️ Well done!