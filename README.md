# Description

Wrapper for comfortably using Playkey cloud gaming platform under Linux

# Problem statement

Main problems of running Playkey Launcher on Linux:

1. Playkey site requires browser User-Agent to be Windows or Mac OS

> Solved by using chrome extension to send Windows User-Agent

2. Playkey site passes arguments to the Playkey Launcher by using xdg-open link,
which is only supported by chromium or google-chrome

> Solved by using chromium browser in the package

3. The `xdg-open` program doesn't support link fromat provided by Playkey site,
or Playkey Launcher isn't configured as a link handler of format `playkey://*`

> Solved with custom python script that parses link and calls Playkey launcher
> with parsed arguments. That script then is added to the PATH variable when
> chromium is started.

# Requirements

Build:
```
innoextract
wget
```

Run:
```
chromium
wine
python3
winetricks
openal
lib32-openal
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
