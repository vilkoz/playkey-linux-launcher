INSTALL_EXE=PlaykeySetup.exe
DLLS=app

$(INSTALL_EXE):
	wget "https://static.playkey.net/clientdownload.aspx?file=windows-desktop/Release/PlaykeySetup.exe&name=PlaykeySetup.exe" -O $(INSTALL_EXE)

$(DLLS): $(INSTALL_EXE)
	innoextract $(INSTALL_EXE)

install: $(DLLS)
	@echo $(DLLS) $(INSTALL_EXE)
	@echo 'Creating installation folder'
	install -d -m755 /usr/share/playkey-linux
	@echo 'Copying windows binaries'
	cp -ra $(DLLS)/* /usr/share/playkey-linux
	find /usr/share/playkey-linux -type d -exec chmod 755 "{}" \;
	find /usr/share/playkey-linux -type f -exec chmod 644 "{}" \;
	@echo 'Copying playkey-linux-launcher scripts'
	install xdg-open /usr/share/playkey-linux
	install -d -m755 /usr/bin
	install -m755 playkey-linux /usr/bin
	@echo 'Copying playkey-linux-launcher chrome user-agent extension'
	install -d -m755 /usr/share/playkey-linux/extension
	cp -ra extension/* /usr/share/playkey-linux/extension/
	find /usr/share/playkey-linux/extension/ -type f -exec chmod 644 "{}" \;
	rm -rf $(DLLS)
	rm -rf $(INSTALL_EXE)
	@echo 'Finished installation'

uninstall:
	rm -f /usr/bin/playkey-linux
	rm -rf /usr/share/playkey-linux/
	bash -c 'for name in /home/*/.playkey-linux; do rm -rf $$name; done'
	@echo 'Finished removing'

.PHONY: install uninstall
