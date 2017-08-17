# Ground.exe Cleaner
This is a Nodejs script to clean infected Ground.exe files.
I created it to clean all the files infected by this damn virus after using Malwarebytes to scan the whole filesystem, closing Ground.exe from taskbar and disabling its service from starting on windows start-up.

# Steps i used to get rid of the virus: 
1- Scan computer with Malwarebytes, and let it delete everything suspicious  
2- Enable (Show hidden files, folders, and drives) and uncheck (Hide protected operating system files)  
3- Noticed that every infected exe, ico, or jpg file is a size of 522kb  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if the original file is "file.exe", the virus will rename it to "gfile.exe", and the "file.exe" now is infected  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;virus ofcourse hides the original copy  
4- used this script to rename the "g" files to there original name and deleting infected files  


## THIS DOES NOT REMOVE THE VIRUS, IT JUST CLEAN INFECTED FILES
