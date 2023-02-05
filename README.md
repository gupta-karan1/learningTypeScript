<!-- how to get h1 in readme.md? -->
# Introduction to the course
## What is this course about?
Typescript Fundamentals
Typescript allows for static checking.
Typescript is a superset of Javascript.
Typescript analyzes your code and gives you errors before you run your code.
Typescript is a development tool.
Typescript still needs Javascript to run.

## Setup Typescript
1. Install Node.js
2. Install Git bash on Windows
3. Open Git bash by right clicking and running as administrator.
4. For Mac, open the terminal and write `sudo npm install -g typescript`
5. For Mac, for password, type your password
6. In Git bash, to check if node is installed, type `node -v`
7. In Git bash, to install typescript globally, type `npm install -g typescript` (npm is the node package manager). If you get an error, you need to restart your computer.
8. In Git bash, to check if typescript is installed, type `tsc -v` (tsc is the typescript compiler). If you get an error, you need to restart your computer.

## Setup Visual Studio Code
1. Install Visual Studio Code
2. Create a folder for your project
3. Create a file called `intro.ts` in the folder
4. Write standard Javascript in the file
5. The code will not run in the browser
6. Open the terminal in Visual Studio Code
7. Type `tsc intro.ts` to compile the code
8. If the following error appears `tsc : File C:\Users\ADMIN\AppData\Roaming\npm\tsc.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at
https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ tsc intro.ts
+ ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess`
9. Open powershell as administrator
10. Run this command: Set-ExecutionPolicy RemoteSigned
11. This way in Powershell: `PS C:\WINDOWS\system32> Set-ExecutionPolicy

cmdlet Set-ExecutionPolicy at command pipeline position 1
Supply values for the following parameters:
ExecutionPolicy: RemoteSigned

Execution Policy Change
The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
you to the security risks described in the about_Execution_Policies help topic at
https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): Y
PS C:\WINDOWS\system32>`

12. Run `tsc intro.ts` again
13. A new file called `intro.js` will be created


## Advantages of Typescript
1. When declaring variables, you can specify the type of the variable
2. You cannot assign a string to a number
3. You cannot apply a string method to a number
4. You cannot assign a variable to a different type
5. You will get an error if you try to do any of the above
6. You get suggestions for methods and properties if you mistype them
7. You get suggestions for variables and functions if you mistype them