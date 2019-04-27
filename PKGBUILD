# Maintainer: Vitalii Rybalko <vilko dot a at gmail dot com>

pkgname=playkey-linux
pkgver=1.0
pkgrel=1
pkgdesc='Client for game streaming service playkey.net'
arch=('x86_64')
url='https://www.playkey.net'
license=('custom')
options=('!strip')
provides=('playkey-linux')
conflicts=()
depends=(
	'chromium'
	'wine'
	'python3'
	'winetricks'
	'zenity'
	'openal'
	'lib32-openal'
)
makedepends=(
	'git'
	'innoextract'
)
install=
source_x86_64=(
	'https://static.playkey.net/clientdownload.aspx?file=windows-desktop/Release/PlaykeySetup.exe&name=PlaykeySetup.exe'
	'git+https://github.com/vilkoz/playkey-linux-launcher.git'
)
# source_i686
# source_armv7h
sha256sums_x86_64=(
	'65588718d0d90632414e6b36a3a9f55bf66bc82fd38bc6841b68b499d67f6ba1'
	'SKIP'
)
# sha256sums_x86_64
# sha256sums_armv7h

prepare() {
	msg2 "prepare"
	innoextract 'PlaykeySetup.exe&name=PlaykeySetup.exe'
}

# build() {
# 	msg2 "build"
# }

package() {
	msg2 "package"
	echo $(pwd)
	install -d -m755 $pkgdir/usr/share/playkey-linux
	cp -ra app/* $pkgdir/usr/share/playkey-linux
	find $pkgdir/usr/share/playkey-linux -type d -exec chmod 755 "{}" \;
	find $pkgdir/usr/share/playkey-linux -type f -exec chmod 644 "{}" \;
	cp playkey-linux-launcher/xdg-open $pkgdir/usr/share/playkey-linux
	chmod a+x $pkgdir/usr/share/playkey-linux/xdg-open
	install -d -m755 $pkgdir/usr/bin
	install -m755 playkey-linux-launcher/playkey-linux $pkgdir/usr/bin
}

