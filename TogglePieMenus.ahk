﻿#NoEnv 
DetectHiddenWindows, On
SetTitleMatchMode, 2

If !WinExist("PieMenu.exe")
	{
	Run, "%A_ScriptDir%\Resources\PieMenu.exe"	
	Soundplay, %A_ScriptDir%\Resources\sound\ToggleOn.mp3, 1
	}
else
	{	
	WinClose, %A_ScriptDir%\Resources\PieMenu.exe
	Soundplay, %A_ScriptDir%\Resources\sound\ToggleOff.mp3, 1
	}
; Sleep, 300	
exitapp