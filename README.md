# WritersStudio

##Purpose

 writer's tool to create associative mindmaps.

<img src="http://burckhardt.ludicmedia.de/Motives.png">

Relying on the motives modue, it is avaliable as a standalone desktop application, built with the popular electron framework.
One of the cool things here is that electron brdiges the gab between clientside web application and the user's filesystem.

The **motives** module allows to create and maintain a number of connected associative mindsets which you can san by fulltext and tag search.
But you can also link files or information, be it a file for a text editor, a presentation or a web research.

If you click on it, the respective file will be launched (in your text editor, presentation program or favorite browser).

So basically it is a tool that lets you manage great amount of i9nformation, perfect for a writer who takes care of a lot of characters. 
But it could be also useful for academics and researchers - anybody in need of a mtea adminstration tool.      



##Desktop Applications

Since the electron packager is installed, you can create your application package yourself.
Just type into the console


```javascript

electron-packager . app --platform win32 --arch x64 
// this is for windows 64 bit 

electron-packager . app --platform win32 --arch ia32
// this is for windows 32 bit 

electron-packager . app --platform linux --arch ia32
// this is for linux 32 bit

electron-packager . app --platform linux --arch x64
// this is for linux 64 bit

electron-packager ./ --platform darwin --arch x64
// This is for OSX

electron-packager ./ --all
// this is for all the platforms, including Macintosh

``` 


[Linux 32 bit](https://github.com/Phalanstere/WritersStudioLinux_32bit)

[Linux 64 bit](https://github.com/Phalanstere/WritersStudioLinux_64bit)

[Windows 32 bit](https://github.com/Phalanstere/WritersStudioWindows_32bit)