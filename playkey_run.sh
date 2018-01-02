#!/usr/bin/bash

echo $PATH
PATH=`pwd`:$PATH
chromium "https://playkey.net"
echo $PATH
