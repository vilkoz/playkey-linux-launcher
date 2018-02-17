# Description

Small wrapper for using Playkey cloud gaming platform under Linux

# Installation

1. Install wine, wine64 and winetricks
2. Install following dll's and libraries with winetricks: `d3drm, d3dx10\_43, d3dx10, d3dx11\_43, d3dx9\_{24-43}, d3dx9, d3dxof, devenum, dinput8, directx9, physx, vcrun2008, vcrun2010, xact, xinput` using command:

```
winetricks -q d3drm d3dx10_43 d3dx10 d3dx11_43 d3dx9_24 d3dx9_25 d3dx9_26 d3dx9_27 d3dx9_28 d3dx9_29 d3dx9_30 d3dx9_31 d3dx9_32 d3dx9_33 d3dx9_34 d3dx9_35 d3dx9_36 d3dx9_37 d3dx9_38 d3dx9_39 d3dx9_40 d3dx9_41 d3dx9_42 d3dx9_43 d3dx9 d3dxof devenum dinput8 directx9 physx vcrun2008 vcrun2010 xact xinput
```

3. run `./playkey_run.sh`
