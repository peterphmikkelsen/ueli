Get-ChildItem -File -Path 'C:\ProgramData\Microsoft\Windows\Start Menu', 'C:\Users\Oliver\AppData\Roaming\Microsoft\Windows\Start Menu' -Recurse -Include '*.lnk', '*.url' | Select-Object -Property Name, FullName, Extension, BaseName | ConvertTo-Json -Compress