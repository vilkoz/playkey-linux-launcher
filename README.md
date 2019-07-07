# Description

Wrapper for comfortably using Playkey cloud gaming platform under Linux

# Requirements

Build:
```
innoextract
wget
```

Run:
```
'chromium'
'wine'
'python3'
'winetricks'
'openal'
'lib32-openal'
```

# Installation

## Arch Linux
From aur:
```
yay -S playkey-linux
```

Or from github:
```
git clone https://github.com/vilkoz/playkey-linux-launcher.git
cd playkey-linux-launcher
makepkg -si PKGBUILD
```

## Other Linux disros
```
git clone https://github.com/vilkoz/playkey-linux-launcher.git
cd playkey-linux-launcher
sudo make install
```

To uninstall use `sudo make uninstall`
