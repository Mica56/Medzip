# Medzip

Progress Report:</br>
- [x] setup repo
- [x] Initial setup w/ navbar  

Frameworks implemented:</br>
- [VueJs](https://vuejs.org/) & [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) for the frontend

## Note:
To run/edit the program on your machine you need to install</br>
- [VSCode](https://code.visualstudio.com/) or any code editor that is Javascript compatible
- [npm](https://nodejs.org/en/)

Next, on your terminal do the following:</br>
- Once you have npm installed you can run the following both to install and upgrade [Yarn](https://classic.yarnpkg.com/en/)
```
 npm install --global yarn
```
- Check installation</br>
```
 yarn --version
```
To run the code, on your terminal you type and enter:</br>
```
 cd frontend
 yarn install
 yarn serve
```
> Then, click either 'Local' or 'Network' running link.

# FAQS:

### Legend and Explanation of Each Command

| Commands                                     | Command's Use and Explanation                                         |
|----------------------------------------------|-----------------------------------------------------------------------|
| git checkout                                 | Let's you go to another branch located in your local machine.         |           
| git clone                                    | gives you a copy of the repository.                                   |
| git status                                   | displays the status of the current git action/process you are doing.  |
| git add                                      | "Stage" or choose the changes what would be applied to the repository.|
| git commit                                   |  Further Prepares the changes to be submitted.                        |    
| git push -u origin {YourName}-Branch         | Finally, apply all the changes                                        |           
| git pull                                     | Fetch and download content from a remote repository and immediately   |
|                                              |   update the local repository to match that content.                  |

| Options                             | Option's Use and Explanation                                                     |
|-------------------------------------|----------------------------------------------------------------------------------|
| --all                               | It specifies that it adds all changes, used in conjunction with git add.         |
| -m "Write here what you changed"    | adds a small message, specifying what you changed.                               |
| -u                                  | I honestly don't know I just use it. Please refer to the documentation.          |
| origin                              | This specifies to change your copy in Github.                                    |
| -b                                  | when the branch does not exist, make one. Used in conjunction with git checkout. |
| {YourName}-Branch                   | name of the branch you are pertaining to in the command.                         |


# Step 0 : What is Github?  ( Optional)

#### I reccomend you watch this video to get a basic gist of how github works and the process we are conducting.
Link : https://www.youtube.com/watch?v=w3jLJU7DT5E

# Step 1 : Install Git in your machine

Please install Git in your machine, for you to be able to use it in your respective command line/terminals. (Also known as cmd in windows, and Terminals in Unix Machines)

Use this link as reference.
Link: https://www.atlassian.com/git/tutorials/install-git

# Step 2 :  How to Get a Copy of this repository.

Find a suitable area to put the files and type the command. 
```
  - git clone https://github.com/Mica56/Medzip
```
# Add changes on the folder Medzip on your local machine.

# Step 3 : Submitting my work

-Go to the repository/directory/folder where this copy of the repository is saved.
- Type the command : ```git checkout -b {YourName}-Branch```
- Type the command : ```git status```
 * Check the files you have modified or changed.
 - Type the command : ```git add --all```
- Type the command : ```git commit -m "Write here what you changed".```
- Type the command : ```git push -u origin {YourName}-Branch```
- Enter your github credentials (username and password)

### I reccomend you do this everytime you are finished coding for the day. That way we can track past and present versions of your work, utilizing Github's version control system.

# Step 4 : Do this part if you have finished something and want to "submit your final answer".
- Go to github and make a pull request. 

-  Note : A pull request is where we evaluate and finalize your submitted work, and make any possible changes. In the industry, this process is also known as "code review".

(Credits to MostDeadDeveloper)

</br></br> (A project of Justine Miralles,  et. al.)
