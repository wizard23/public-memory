```shellsession
wizard23@Philipps-iMac projects % ls
EvoCellSpace    asimov          bateson         build-imhex     kicad           ms4k
wizard23@Philipps-iMac projects % mkdir ms3k
wizard23@Philipps-iMac projects % cd ms
cd: no such file or directory: ms
wizard23@Philipps-iMac projects % pwd  
/Users/wizard23/projects
wizard23@Philipps-iMac projects % 
wizard23@Philipps-iMac projects % ls
EvoCellSpace    asimov          bateson         build-imhex     kicad           ms3k            ms4k
wizard23@Philipps-iMac projects % cd ms3k
wizard23@Philipps-iMac ms3k % ls
wizard23@Philipps-iMac ms3k % ls ../ms4k
datasheets      kicad_tutorial
wizard23@Philipps-iMac ms3k % git clone https://github.com/MagicShifter/MS3000.git
Cloning into 'MS3000'...
remote: Enumerating objects: 1817, done.
remote: Counting objects: 100% (1527/1527), done.
remote: Compressing objects: 100% (1403/1403), done.
remote: Total 1817 (delta 120), reused 1513 (delta 107), pack-reused 290 (from 1)
Receiving objects: 100% (1817/1817), 4.70 MiB | 3.78 MiB/s, done.
Resolving deltas: 100% (287/287), done.
wizard23@Philipps-iMac ms3k % cd MS3000 
wizard23@Philipps-iMac MS3000 % ls
MS3000-Assets           MS3000-WebInterface     MS3000.pb.c             MS3000.proto            README.md               git_aliases.sh
MS3000-Firmware         MS3000.options          MS3000.pb.h             Makefile                build-1.0.0_log.txt     lab
wizard23@Philipps-iMac MS3000 % git submodule update --init --recursive
Submodule 'MS3000-Assets' (https://github.com/magicshifter/MS3000-Assets.git) registered for path 'MS3000-Assets'
Submodule 'MS3000-Firmware' (https://github.com/magicshifter/MS3000-Firmware.git) registered for path 'MS3000-Firmware'
Submodule 'MS3000-WebInterface' (https://github.com/magicshifter/MS3000-WebInterface.git) registered for path 'MS3000-WebInterface'
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-Assets'...
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware'...
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-WebInterface'...
Submodule path 'MS3000-Assets': checked out '82b7a4d89568855f66f980a430570c43d6b60bdc'
fatal: remote error: upload-pack: not our ref 335fa8783425dc6e71f379e23cb0266307d9ac86
fatal: Fetched in submodule path 'MS3000-Firmware', but it did not contain 335fa8783425dc6e71f379e23cb0266307d9ac86. Direct fetching of that commit failed.
wizard23@Philipps-iMac MS3000 % cd MS3000-Firmware 
wizard23@Philipps-iMac MS3000-Firmware % ls
wizard23@Philipps-iMac MS3000-Firmware % git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    .gitignore
        deleted:    .gitmodules
        deleted:    Docs/Sonakinatography_Composition_XVII.jpg
        deleted:    Docs/munker_illusion.jpg
        deleted:    MS3KOS/.clang-format
        deleted:    MS3KOS/.gitignore
        deleted:    MS3KOS/.python-version
        deleted:    MS3KOS/.travis.yml
        deleted:    MS3KOS/.vscode/c_cpp_properties.json
        deleted:    MS3KOS/.vscode/extensions.json
        deleted:    MS3KOS/.vscode/launch.json
        deleted:    MS3KOS/MS3000.pb.c
        deleted:    MS3KOS/MS3000.pb.h
        deleted:    MS3KOS/Makefile
        deleted:    MS3KOS/RELEASE.txt
        deleted:    MS3KOS/data/BubbleBobble.magicBitmap
        deleted:    MS3KOS/data/blueGhost.magicBitmap
        deleted:    MS3KOS/data/cursor.magicBitmap
        deleted:    MS3KOS/data/flowerswedish.magicBitmap
        deleted:    MS3KOS/data/font10x16.magicFont
        deleted:    MS3KOS/data/font4x5.magicFont
        deleted:    MS3KOS/data/font6x8.magicFont
        deleted:    MS3KOS/data/font7x12.magicFont
        deleted:    MS3KOS/data/giraffe.magicBitmap
        deleted:    MS3KOS/data/heart.magicBitmap
        deleted:    MS3KOS/data/invader.magicBitmap
        deleted:    MS3KOS/data/mario.magicBitmap
        deleted:    MS3KOS/data/mushroom.magicBitmap
        deleted:    MS3KOS/data/nyancat.magicBitmap
        deleted:    MS3KOS/data/oneup.magicBitmap
        deleted:    MS3KOS/data/redGhost.magicBitmap
        deleted:    MS3KOS/data/smilie.magicBitmap
        deleted:    MS3KOS/data/star.magicBitmap
        deleted:    MS3KOS/doc/MIDI on the MagicShifter3000.docx
        deleted:    MS3KOS/doc/MIDI on the MagicShifter3000.odt
        deleted:    MS3KOS/doc/MIDI on the MagicShifter3000.pdf
        deleted:    MS3KOS/doc/midishifter_midishield_connections.jpg
        deleted:    MS3KOS/doc/midishifter_midishield_connections.txt
        deleted:    MS3KOS/lib/Base64/Base64.h
        deleted:    MS3KOS/lib/Base64/LICENSE
        deleted:    MS3KOS/lib/Base64/README.markdown
        deleted:    MS3KOS/lib/Base64/examples/base64/base64.ino
        deleted:    MS3KOS/lib/Base64/keywords.txt
        deleted:    MS3KOS/lib/Base64/library.properties
        deleted:    MS3KOS/lib/Util/JsonParseHelper.h
        deleted:    MS3KOS/lib/Util/QueueArray.h
        deleted:    MS3KOS/lib/Util/StackClass.h
        deleted:    MS3KOS/lib/gdbstub/License
        deleted:    MS3KOS/lib/gdbstub/Makefile
        deleted:    MS3KOS/lib/gdbstub/README.md
        deleted:    MS3KOS/lib/gdbstub/gdbcmds
        deleted:    MS3KOS/lib/gdbstub/gdbstub-cfg.h
        deleted:    MS3KOS/lib/gdbstub/gdbstub-entry.S
        deleted:    MS3KOS/lib/gdbstub/gdbstub-entry.h
        deleted:    MS3KOS/lib/gdbstub/gdbstub.c
        deleted:    MS3KOS/lib/gdbstub/gdbstub.h
        deleted:    MS3KOS/lib/miby/miby.cpp
        deleted:    MS3KOS/lib/miby/miby.h
        deleted:    MS3KOS/lib/miby/miby_config.h
        deleted:    MS3KOS/lib/nanopb/pb.h
        deleted:    MS3KOS/lib/nanopb/pb_common.c
        deleted:    MS3KOS/lib/nanopb/pb_common.h
        deleted:    MS3KOS/lib/nanopb/pb_decode.c
        deleted:    MS3KOS/lib/nanopb/pb_decode.h
        deleted:    MS3KOS/lib/nanopb/pb_encode.c
        deleted:    MS3KOS/lib/nanopb/pb_encode.h
        deleted:    MS3KOS/lib/nanopb/readme.txt
        deleted:    MS3KOS/lib/readme.txt
        deleted:    MS3KOS/notes.md
        deleted:    MS3KOS/platformio.ini
        deleted:    MS3KOS/readme.md
        deleted:    MS3KOS/requirements.txt
        deleted:    MS3KOS/src/CommandInterface.h
        deleted:    MS3KOS/src/Hardware/Buttons.h
        deleted:    MS3KOS/src/Hardware/EEPROMString.h
        deleted:    MS3KOS/src/Hardware/LEDHardware.h
        deleted:    MS3KOS/src/Hardware/Sensor.h
        deleted:    MS3KOS/src/MS3000.pb.c
        deleted:    MS3KOS/src/MS3000.pb.h
        deleted:    MS3KOS/src/MS3KOS.cpp
        deleted:    MS3KOS/src/Modes/BaseMode.h
        deleted:    MS3KOS/src/Modes/BouncingBall.h
        deleted:    MS3KOS/src/Modes/MIDI/MIDIArpeggiator.h
        deleted:    MS3KOS/src/Modes/MIDI/MIDISequence8.h
        deleted:    MS3KOS/src/Modes/MIDI/MibyConfig.h
        deleted:    MS3KOS/src/Modes/MIDI/RawMIDIHandlers.h
        deleted:    MS3KOS/src/Modes/MIDI/envelope.h
        deleted:    MS3KOS/src/Modes/MIDI/list.h
        deleted:    MS3KOS/src/Modes/MIDI/midi_defs.h
        deleted:    MS3KOS/src/Modes/MagicBeat.h
        deleted:    MS3KOS/src/Modes/MagicBike.h
        deleted:    MS3KOS/src/Modes/MagicConway.h
        deleted:    MS3KOS/src/Modes/MagicCountdown.h
        deleted:    MS3KOS/src/Modes/MagicLight.h
        deleted:    MS3KOS/src/Modes/MagicMagnet.h
        deleted:    MS3KOS/src/Modes/MagicPOV.h
        deleted:    MS3KOS/src/Modes/MagicRemote.h
        deleted:    MS3KOS/src/Modes/MagicShake.h
        deleted:    MS3KOS/src/Modes/MagicUpdate.h
        deleted:    MS3KOS/src/Modes/ModeSelector.h
        deleted:    MS3KOS/src/Modes/Modes.h
        deleted:    MS3KOS/src/Modes/PowerEmergency.h
        deleted:    MS3KOS/src/Modes/SystemText.h
        deleted:    MS3KOS/src/Modes/UI/ShakeSync.h
        deleted:    MS3KOS/src/PerformanceTests.h
        deleted:    MS3KOS/src/WebServer/ModesInterface.h
        deleted:    MS3KOS/src/WebServer/WebServer.h
        deleted:    MS3KOS/src/WebServer/WebServerAPI.h
        deleted:    MS3KOS/src/WebServer/WebServerAutoConnect.h
        deleted:    MS3KOS/src/WebServer/WebServerFiles.h
        deleted:    MS3KOS/src/msButtonTimers.h
        deleted:    MS3KOS/src/msConfig.h
        deleted:    MS3KOS/src/msGlobals.h
        deleted:    MS3KOS/src/msImage.h
        deleted:    MS3KOS/src/msSysLog.h
        deleted:    MS3KOS/src/msSystem.h
        deleted:    MS3KOS/src/msTests.h
        deleted:    MS3KOS/src/msTypes.h
        deleted:    MS3KOS/src/pb_decode.c
        deleted:    MS3KOS/src/pb_decode.h
        deleted:    MS3KOS/src/pb_encode.c
        deleted:    MS3KOS/src/pb_encode.h
        deleted:    MS3KOS/src/rtpMIDI.h
        deleted:    MS3KOS/src/serialMIDI.c
        deleted:    MS3KOS/src/serialMIDI.h
        deleted:    MS3KOS/src/serial_miby_config.h
        deleted:    Makefile
        deleted:    Makefile.tests
        deleted:    NOTES.txt
        deleted:    README.md
        deleted:    Tools/.python-version
        deleted:    Tools/ESP8266_ota/ArduinoOTA.zip
        deleted:    Tools/ESP8266_ota/ArduinoOTA/ArduinoOTA.cpp
        deleted:    Tools/ESP8266_ota/ArduinoOTA/ArduinoOTA.h
        deleted:    Tools/ESP8266_ota/ArduinoOTA/examples/BasicOTA/BasicOTA.ino
        deleted:    Tools/ESP8266_ota/ArduinoOTA/examples/OTALeds/OTALeds.ino
        deleted:    Tools/ESP8266_ota/ArduinoOTA/keywords.txt
        deleted:    Tools/ESP8266_ota/ArduinoOTA/library.properties
        deleted:    Tools/ESP8266_ota/command line for upload program.txt
        deleted:    Tools/ESP8266_ota/espota.py
        deleted:    Tools/MS3000Tool.py
        deleted:    Tools/MS3000Tool.py.bak
        deleted:    Tools/MS3000Tool_NewWeb.py
        deleted:    Tools/MS3000_init.sh
        deleted:    Tools/buildSettingsAP.sh
        deleted:    Tools/esptool
        deleted:    Tools/esptool-ck
        deleted:    Tools/genBuildList.sh
        deleted:    Tools/mklittlefs
        deleted:    Tools/nanopb
        deleted:    Tools/readFirmware.sh
        deleted:    Tools/writeFirmware.sh

wizard23@Philipps-iMac MS3000-Firmware % git pull
Already up to date.
wizard23@Philipps-iMac MS3000-Firmware % git branch -av
* master                                         4fe6c08 mklittlefs: master
  remotes/origin/2.0-prep                        f597e95 Merge branch 'development' into 2.0-prep
  remotes/origin/2.0-prep-protobufs              a6d7d97 serial reorg
  remotes/origin/20200331                        b30bc7f 20200331 sync
  remotes/origin/HEAD                            -> origin/master
  remotes/origin/MIDI-refactor                   58a5ef9 debug: wifi interconnect
  remotes/origin/MS3KOS-1.9.0                    93d3417 new colors for 1.9.0
  remotes/origin/MS3KOS-1.9.0-20200911-toolfixup a95aa67 fixups in prep for new toolfix
  remotes/origin/bike-mode                       32fcb13 Merge branch 'development' into bike-mode
  remotes/origin/build-1.0.0                     37dc1c0 toolchain fixups: serialports
  remotes/origin/build-1.9.0                     93d3417 new colors for 1.9.0
  remotes/origin/build-1.9.1                     a733e9f RELEASE.txt
  remotes/origin/development                     17c2b2b Merge branch '20200331' into development
  remotes/origin/fixes-etc                       61afc3b nanopb to latest
  remotes/origin/game-of-life-mode               93d3417 new colors for 1.9.0
  remotes/origin/master                          4fe6c08 mklittlefs: master
  remotes/origin/midi-entrypoint                 142d8bc reset project for 2.9.1. pio version
  remotes/origin/oct20-postsup                   3b819fb OTA tooling
  remotes/origin/pb-lib-cleanup                  851ae06 tools up
  remotes/origin/pio-3.1.0-upfixes               2cac083 deprecated wifi event handlers
  remotes/origin/revert-beat-hackups             0375536 Forced sync of generated proto
wizard23@Philipps-iMac MS3000-Firmware % git fetch --all
wizard23@Philipps-iMac MS3000-Firmware % git submodule update --init --recursive
wizard23@Philipps-iMac MS3000-Firmware % cd ..
wizard23@Philipps-iMac MS3000 % ls
MS3000-Assets           MS3000-WebInterface     MS3000.pb.c             MS3000.proto            README.md               git_aliases.sh
MS3000-Firmware         MS3000.options          MS3000.pb.h             Makefile                build-1.0.0_log.txt     lab
wizard23@Philipps-iMac MS3000 % git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)
        modified:   MS3000-Firmware (new commits, modified content)
        modified:   MS3000-WebInterface (modified content)

no changes added to commit (use "git add" and/or "git commit -a")
wizard23@Philipps-iMac MS3000 % git submodule update --init --recursive
fatal: remote error: upload-pack: not our ref 335fa8783425dc6e71f379e23cb0266307d9ac86
fatal: Fetched in submodule path 'MS3000-Firmware', but it did not contain 335fa8783425dc6e71f379e23cb0266307d9ac86. Direct fetching of that commit failed.
wizard23@Philipps-iMac MS3000 % cd MS3000-Firmware 
wizard23@Philipps-iMac MS3000-Firmware % ls
wizard23@Philipps-iMac MS3000-Firmware % git fetch --all
wizard23@Philipps-iMac MS3000-Firmware % git branch -av
* master                                         4fe6c08 mklittlefs: master
  remotes/origin/2.0-prep                        f597e95 Merge branch 'development' into 2.0-prep
  remotes/origin/2.0-prep-protobufs              a6d7d97 serial reorg
  remotes/origin/20200331                        b30bc7f 20200331 sync
  remotes/origin/HEAD                            -> origin/master
  remotes/origin/MIDI-refactor                   58a5ef9 debug: wifi interconnect
  remotes/origin/MS3KOS-1.9.0                    93d3417 new colors for 1.9.0
  remotes/origin/MS3KOS-1.9.0-20200911-toolfixup a95aa67 fixups in prep for new toolfix
  remotes/origin/bike-mode                       32fcb13 Merge branch 'development' into bike-mode
  remotes/origin/build-1.0.0                     37dc1c0 toolchain fixups: serialports
  remotes/origin/build-1.9.0                     93d3417 new colors for 1.9.0
  remotes/origin/build-1.9.1                     a733e9f RELEASE.txt
  remotes/origin/development                     17c2b2b Merge branch '20200331' into development
  remotes/origin/fixes-etc                       61afc3b nanopb to latest
  remotes/origin/game-of-life-mode               93d3417 new colors for 1.9.0
  remotes/origin/master                          4fe6c08 mklittlefs: master
  remotes/origin/midi-entrypoint                 142d8bc reset project for 2.9.1. pio version
  remotes/origin/oct20-postsup                   3b819fb OTA tooling
  remotes/origin/pb-lib-cleanup                  851ae06 tools up
  remotes/origin/pio-3.1.0-upfixes               2cac083 deprecated wifi event handlers
  remotes/origin/revert-beat-hackups             0375536 Forced sync of generated proto
wizard23@Philipps-iMac MS3000-Firmware % cd ..
wizard23@Philipps-iMac MS3000 % ls -l
total 160
drwxr-xr-x  15 wizard23  staff    480 Mar 15 18:28 MS3000-Assets
drwxr-xr-x   3 wizard23  staff     96 Mar 15 18:28 MS3000-Firmware
drwxr-xr-x   3 wizard23  staff     96 Mar 15 18:28 MS3000-WebInterface
-rw-r--r--   1 wizard23  staff    103 Mar 15 18:28 MS3000.options
-rw-r--r--   1 wizard23  staff   9465 Mar 15 18:28 MS3000.pb.c
-rw-r--r--   1 wizard23  staff  16650 Mar 15 18:28 MS3000.pb.h
-rw-r--r--   1 wizard23  staff   5095 Mar 15 18:28 MS3000.proto
-rw-r--r--   1 wizard23  staff   2059 Mar 15 18:28 Makefile
-rw-r--r--   1 wizard23  staff   6112 Mar 15 18:28 README.md
-rw-r--r--   1 wizard23  staff  18825 Mar 15 18:28 build-1.0.0_log.txt
-rw-r--r--   1 wizard23  staff    326 Mar 15 18:28 git_aliases.sh
drwxr-xr-x   4 wizard23  staff    128 Mar 15 18:28 lab
wizard23@Philipps-iMac MS3000 % git branch -av
* master                     6fc4d11 nanopb/mklittlefs submodule fix
  remotes/origin/2.0-prep    b4b970d sync of subs
  remotes/origin/HEAD        -> origin/master
  remotes/origin/development 0e90897 fix build
  remotes/origin/master      6fc4d11 nanopb/mklittlefs submodule fix
  remotes/origin/trytofixit  ab8bcaa v1.3 sync
wizard23@Philipps-iMac MS3000 % git submodule update --init --recursive
fatal: remote error: upload-pack: not our ref 335fa8783425dc6e71f379e23cb0266307d9ac86
fatal: Fetched in submodule path 'MS3000-Firmware', but it did not contain 335fa8783425dc6e71f379e23cb0266307d9ac86. Direct fetching of that commit failed.
wizard23@Philipps-iMac MS3000 % cd MS3000-Firmware/  
wizard23@Philipps-iMac MS3000-Firmware % git checkout main
error: pathspec 'main' did not match any file(s) known to git
wizard23@Philipps-iMac MS3000-Firmware % git branch -av
* master                                         4fe6c08 mklittlefs: master
  remotes/origin/2.0-prep                        f597e95 Merge branch 'development' into 2.0-prep
  remotes/origin/2.0-prep-protobufs              a6d7d97 serial reorg
  remotes/origin/20200331                        b30bc7f 20200331 sync
  remotes/origin/HEAD                            -> origin/master
  remotes/origin/MIDI-refactor                   58a5ef9 debug: wifi interconnect
  remotes/origin/MS3KOS-1.9.0                    93d3417 new colors for 1.9.0
  remotes/origin/MS3KOS-1.9.0-20200911-toolfixup a95aa67 fixups in prep for new toolfix
  remotes/origin/bike-mode                       32fcb13 Merge branch 'development' into bike-mode
  remotes/origin/build-1.0.0                     37dc1c0 toolchain fixups: serialports
  remotes/origin/build-1.9.0                     93d3417 new colors for 1.9.0
  remotes/origin/build-1.9.1                     a733e9f RELEASE.txt
  remotes/origin/development                     17c2b2b Merge branch '20200331' into development
  remotes/origin/fixes-etc                       61afc3b nanopb to latest
  remotes/origin/game-of-life-mode               93d3417 new colors for 1.9.0
  remotes/origin/master                          4fe6c08 mklittlefs: master
  remotes/origin/midi-entrypoint                 142d8bc reset project for 2.9.1. pio version
  remotes/origin/oct20-postsup                   3b819fb OTA tooling
  remotes/origin/pb-lib-cleanup                  851ae06 tools up
  remotes/origin/pio-3.1.0-upfixes               2cac083 deprecated wifi event handlers
  remotes/origin/revert-beat-hackups             0375536 Forced sync of generated proto
wizard23@Philipps-iMac MS3000-Firmware % git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.
wizard23@Philipps-iMac MS3000-Firmware % git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
wizard23@Philipps-iMac MS3000-Firmware % ls -l
total 40
drwxr-xr-x   4 wizard23  staff   128 Mar 15 18:30 Docs
drwxr-xr-x  19 wizard23  staff   608 Mar 15 18:30 MS3KOS
-rw-r--r--   1 wizard23  staff   105 Mar 15 18:30 Makefile
-rwxr-xr-x   1 wizard23  staff  3259 Mar 15 18:30 Makefile.tests
-rw-r--r--   1 wizard23  staff   422 Mar 15 18:30 NOTES.txt
-rw-r--r--   1 wizard23  staff  7676 Mar 15 18:30 README.md
drwxr-xr-x  16 wizard23  staff   512 Mar 15 18:30 Tools
wizard23@Philipps-iMac MS3000-Firmware % cd .. 
wizard23@Philipps-iMac MS3000 % git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)
        modified:   MS3000-Firmware (new commits)
        modified:   MS3000-WebInterface (modified content)

no changes added to commit (use "git add" and/or "git commit -a")
wizard23@Philipps-iMac MS3000 % git add MS3000-Firmware 
wizard23@Philipps-iMac MS3000 % git commit -m "MS3000-Firmware: should be on master"
[master 8f061b8] MS3000-Firmware: should be on master
 Committer: Philipp Tiefenbacher <wizard23@Philipps-iMac.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 1 insertion(+), 1 deletion(-)
wizard23@Philipps-iMac MS3000 % git config --global --edit
wizard23@Philipps-iMac MS3000 % git commit -m "MS3000-Firmware: should be on master"
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)
        modified:   MS3000-WebInterface (modified content)

no changes added to commit (use "git add" and/or "git commit -a")
wizard23@Philipps-iMac MS3000 % git push
Username for 'https://github.com': wizard23
Password for 'https://wizard23@github.com': 
remote: Invalid username or token. Password authentication is not supported for Git operations.
fatal: Authentication failed for 'https://github.com/MagicShifter/MS3000.git/'
wizard23@Philipps-iMac MS3000 % vi .git/config
wizard23@Philipps-iMac MS3000 % cd ..
wizard23@Philipps-iMac ms3k % ls -l
total 0
drwxr-xr-x  18 wizard23  staff  576 Mar 15 18:28 MS3000
wizard23@Philipps-iMac ms3k % rm -rf 
wizard23@Philipps-iMac ms3k % pwd
/Users/wizard23/projects/ms3k
wizard23@Philipps-iMac ms3k % ls -l
total 0
drwxr-xr-x  18 wizard23  staff  576 Mar 15 18:28 MS3000
wizard23@Philipps-iMac ms3k % rm -rf MS3000 
wizard23@Philipps-iMac ms3k % git clone git@github.com:MagicShifter/MS3000.git
Cloning into 'MS3000'...
remote: Enumerating objects: 1817, done.
remote: Counting objects: 100% (1527/1527), done.
remote: Compressing objects: 100% (1403/1403), done.
remote: Total 1817 (delta 120), reused 1513 (delta 107), pack-reused 290 (from 1)
Receiving objects: 100% (1817/1817), 4.70 MiB | 5.28 MiB/s, done.
Resolving deltas: 100% (287/287), done.
wizard23@Philipps-iMac ms3k % cd MS3000 
wizard23@Philipps-iMac MS3000 % git submodule update --init --recursive
Submodule 'MS3000-Assets' (https://github.com/magicshifter/MS3000-Assets.git) registered for path 'MS3000-Assets'
Submodule 'MS3000-Firmware' (https://github.com/magicshifter/MS3000-Firmware.git) registered for path 'MS3000-Firmware'
Submodule 'MS3000-WebInterface' (https://github.com/magicshifter/MS3000-WebInterface.git) registered for path 'MS3000-WebInterface'
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-Assets'...
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware'...
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-WebInterface'...
Submodule path 'MS3000-Assets': checked out '82b7a4d89568855f66f980a430570c43d6b60bdc'
fatal: remote error: upload-pack: not our ref 335fa8783425dc6e71f379e23cb0266307d9ac86
fatal: Fetched in submodule path 'MS3000-Firmware', but it did not contain 335fa8783425dc6e71f379e23cb0266307d9ac86. Direct fetching of that commit failed.
wizard23@Philipps-iMac MS3000 % cd MS3000-Firmware 
wizard23@Philipps-iMac MS3000-Firmware % git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.
wizard23@Philipps-iMac MS3000-Firmware % cd ..
wizard23@Philipps-iMac MS3000 % git add MS3000-Firmware
wizard23@Philipps-iMac MS3000 % git commit -m "MS3000-Firmware: should be on master"
[master eaaf0c4] MS3000-Firmware: should be on master
 1 file changed, 1 insertion(+), 1 deletion(-)
wizard23@Philipps-iMac MS3000 % git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 285 bytes | 285.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: This repository moved. Please use the new location:
remote:   git@github.com:magicshifter/MS3000.git
To github.com:MagicShifter/MS3000.git
   6fc4d11..eaaf0c4  master -> master
wizard23@Philipps-iMac MS3000 % vi .git/config
wizard23@Philipps-iMac MS3000 % cd ..
wizard23@Philipps-iMac ms3k % rm -rf MS3000                                       
wizard23@Philipps-iMac ms3k % git clone git@github.com:magicshifter/MS3000.git
Cloning into 'MS3000'...
remote: Enumerating objects: 1818, done.
remote: Counting objects: 100% (1528/1528), done.
remote: Compressing objects: 100% (1404/1404), done.
remote: Total 1818 (delta 120), reused 1514 (delta 107), pack-reused 290 (from 1)
Receiving objects: 100% (1818/1818), 4.70 MiB | 2.79 MiB/s, done.
Resolving deltas: 100% (287/287), done.
wizard23@Philipps-iMac ms3k % cd MS3000 
wizard23@Philipps-iMac MS3000 % ls
MS3000-Assets           MS3000-WebInterface     MS3000.pb.c             MS3000.proto            README.md               git_aliases.sh
MS3000-Firmware         MS3000.options          MS3000.pb.h             Makefile                build-1.0.0_log.txt     lab
wizard23@Philipps-iMac MS3000 % cd MS3000-Firmware 
wizard23@Philipps-iMac MS3000-Firmware % git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.
wizard23@Philipps-iMac MS3000-Firmware % cd ..
wizard23@Philipps-iMac MS3000 % git add MS3000-Firmware
wizard23@Philipps-iMac MS3000 % git commit -m "MS3000-Firmware: should be on master"
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
wizard23@Philipps-iMac MS3000 % git push
Everything up-to-date
wizard23@Philipps-iMac MS3000 % git pull
Already up to date.
wizard23@Philipps-iMac MS3000 % ls -l
total 160
drwxr-xr-x  2 wizard23  staff     64 Mar 15 18:33 MS3000-Assets
drwxr-xr-x  2 wizard23  staff     64 Mar 15 18:33 MS3000-Firmware
drwxr-xr-x  2 wizard23  staff     64 Mar 15 18:33 MS3000-WebInterface
-rw-r--r--  1 wizard23  staff    103 Mar 15 18:33 MS3000.options
-rw-r--r--  1 wizard23  staff   9465 Mar 15 18:33 MS3000.pb.c
-rw-r--r--  1 wizard23  staff  16650 Mar 15 18:33 MS3000.pb.h
-rw-r--r--  1 wizard23  staff   5095 Mar 15 18:33 MS3000.proto
-rw-r--r--  1 wizard23  staff   2059 Mar 15 18:33 Makefile
-rw-r--r--  1 wizard23  staff   6112 Mar 15 18:33 README.md
-rw-r--r--  1 wizard23  staff  18825 Mar 15 18:33 build-1.0.0_log.txt
-rw-r--r--  1 wizard23  staff    326 Mar 15 18:33 git_aliases.sh
drwxr-xr-x  4 wizard23  staff    128 Mar 15 18:33 lab
wizard23@Philipps-iMac MS3000 % cd MS3000-Firmware 
wizard23@Philipps-iMac MS3000-Firmware % ls
wizard23@Philipps-iMac MS3000-Firmware % ls -alF
total 0
drwxr-xr-x   2 wizard23  staff   64 Mar 15 18:33 ./
drwxr-xr-x  18 wizard23  staff  576 Mar 15 18:33 ../
wizard23@Philipps-iMac MS3000-Firmware % git checkout mastr
error: pathspec 'mastr' did not match any file(s) known to git
wizard23@Philipps-iMac MS3000-Firmware % git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.
wizard23@Philipps-iMac MS3000-Firmware % ls 
wizard23@Philipps-iMac MS3000-Firmware % git fetch --all
wizard23@Philipps-iMac MS3000-Firmware % ls
wizard23@Philipps-iMac MS3000-Firmware % git branch -av
* master                     eaaf0c4 MS3000-Firmware: should be on master
  remotes/origin/2.0-prep    b4b970d sync of subs
  remotes/origin/HEAD        -> origin/master
  remotes/origin/development 0e90897 fix build
  remotes/origin/master      eaaf0c4 MS3000-Firmware: should be on master
  remotes/origin/trytofixit  ab8bcaa v1.3 sync
wizard23@Philipps-iMac MS3000-Firmware % cd ..
wizard23@Philipps-iMac MS3000 % git submodule update --init --recursive
Submodule 'MS3000-Assets' (https://github.com/magicshifter/MS3000-Assets.git) registered for path 'MS3000-Assets'
Submodule 'MS3000-Firmware' (https://github.com/magicshifter/MS3000-Firmware.git) registered for path 'MS3000-Firmware'
Submodule 'MS3000-WebInterface' (https://github.com/magicshifter/MS3000-WebInterface.git) registered for path 'MS3000-WebInterface'
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-Assets'...
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware'...
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-WebInterface'...
Submodule path 'MS3000-Assets': checked out '82b7a4d89568855f66f980a430570c43d6b60bdc'
Submodule path 'MS3000-Firmware': checked out '4fe6c089db6c861c12cc46a4207cab7706de4af8'
Submodule 'Tools/esptool' (https://github.com/themadinventor/esptool) registered for path 'MS3000-Firmware/Tools/esptool'
Submodule 'Tools/esptool-ck' (https://github.com/igrr/esptool-ck.git) registered for path 'MS3000-Firmware/Tools/esptool-ck'
Submodule 'Tools/mklittlefs' (https://github.com/earlephilhower/mklittlefs.git) registered for path 'MS3000-Firmware/Tools/mklittlefs'
Submodule 'Tools/nanopb' (https://github.com/nanopb/nanopb) registered for path 'MS3000-Firmware/Tools/nanopb'
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware/Tools/esptool'...
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware/Tools/esptool-ck'...
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware/Tools/mklittlefs'...
Cloning into '/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware/Tools/nanopb'...
Submodule path 'MS3000-Firmware/Tools/esptool': checked out '302c7bf2475805a67ec08a537897f7555e62d52d'
Submodule path 'MS3000-Firmware/Tools/esptool-ck': checked out 'ee33240587d1ef8768a0edfb415b9d13a3be00c5'
fatal: remote error: upload-pack: not our ref 4c6eef234eec4eb1a7e89e954e700298ac8ace76
fatal: Fetched in submodule path 'MS3000-Firmware/Tools/mklittlefs', but it did not contain 4c6eef234eec4eb1a7e89e954e700298ac8ace76. Direct fetching of that commit failed.
fatal: Failed to recurse into submodule path 'MS3000-Firmware'
wizard23@Philipps-iMac MS3000 % cd MS3000-Firmware 
wizard23@Philipps-iMac MS3000-Firmware % l
zsh: command not found: l
wizard23@Philipps-iMac MS3000-Firmware % ls
Docs            MS3KOS          Makefile        Makefile.tests  NOTES.txt       README.md       Tools
wizard23@Philipps-iMac MS3000-Firmware % ls -alF
total 64
drwxr-xr-x  12 wizard23  staff   384 Mar 15 18:34 ./
drwxr-xr-x  18 wizard23  staff   576 Mar 15 18:33 ../
-rw-r--r--   1 wizard23  staff    40 Mar 15 18:34 .git
-rw-r--r--   1 wizard23  staff   420 Mar 15 18:34 .gitignore
-rw-r--r--   1 wizard23  staff   650 Mar 15 18:34 .gitmodules
drwxr-xr-x   4 wizard23  staff   128 Mar 15 18:34 Docs/
drwxr-xr-x  19 wizard23  staff   608 Mar 15 18:34 MS3KOS/
-rw-r--r--   1 wizard23  staff   105 Mar 15 18:34 Makefile
-rwxr-xr-x   1 wizard23  staff  3259 Mar 15 18:34 Makefile.tests*
-rw-r--r--   1 wizard23  staff   422 Mar 15 18:34 NOTES.txt
-rw-r--r--   1 wizard23  staff  7676 Mar 15 18:34 README.md
drwxr-xr-x  16 wizard23  staff   512 Mar 15 18:34 Tools/
wizard23@Philipps-iMac MS3000-Firmware % git submodule update --init --recursive
fatal: remote error: upload-pack: not our ref 4c6eef234eec4eb1a7e89e954e700298ac8ace76
fatal: Fetched in submodule path 'Tools/mklittlefs', but it did not contain 4c6eef234eec4eb1a7e89e954e700298ac8ace76. Direct fetching of that commit failed.
wizard23@Philipps-iMac MS3000-Firmware % cd Tools/mklittlefs 
wizard23@Philipps-iMac mklittlefs % l
zsh: command not found: l
wizard23@Philipps-iMac mklittlefs % ls 
wizard23@Philipps-iMac mklittlefs % git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.
wizard23@Philipps-iMac mklittlefs % ls 
LICENSE.txt             README.md               build_all_configs.sh    include                 main.cpp                tclap                   xmake.lua
Makefile                build-cross.sh          format.sh               littlefs                run_tests.sh            tests
wizard23@Philipps-iMac mklittlefs % git branch -av
* master                68af3b9 Update Xcode for MacOS 15 x86
  remotes/origin/HEAD   -> origin/master
  remotes/origin/master 68af3b9 Update Xcode for MacOS 15 x86
wizard23@Philipps-iMac mklittlefs % cd ../../
wizard23@Philipps-iMac MS3000-Firmware % ls
Docs            MS3KOS          Makefile        Makefile.tests  NOTES.txt       README.md       Tools
wizard23@Philipps-iMac MS3000-Firmware % cd ../
wizard23@Philipps-iMac MS3000 % ls -l
total 160
drwxr-xr-x  15 wizard23  staff    480 Mar 15 18:34 MS3000-Assets
drwxr-xr-x  12 wizard23  staff    384 Mar 15 18:34 MS3000-Firmware
drwxr-xr-x   3 wizard23  staff     96 Mar 15 18:34 MS3000-WebInterface
-rw-r--r--   1 wizard23  staff    103 Mar 15 18:33 MS3000.options
-rw-r--r--   1 wizard23  staff   9465 Mar 15 18:33 MS3000.pb.c
-rw-r--r--   1 wizard23  staff  16650 Mar 15 18:33 MS3000.pb.h
-rw-r--r--   1 wizard23  staff   5095 Mar 15 18:33 MS3000.proto
-rw-r--r--   1 wizard23  staff   2059 Mar 15 18:33 Makefile
-rw-r--r--   1 wizard23  staff   6112 Mar 15 18:33 README.md
-rw-r--r--   1 wizard23  staff  18825 Mar 15 18:33 build-1.0.0_log.txt
-rw-r--r--   1 wizard23  staff    326 Mar 15 18:33 git_aliases.sh
drwxr-xr-x   4 wizard23  staff    128 Mar 15 18:33 lab
wizard23@Philipps-iMac MS3000 % cd -
~/projects/ms3k/MS3000/MS3000-Firmware
wizard23@Philipps-iMac MS3000-Firmware % ls
Docs            MS3KOS          Makefile        Makefile.tests  NOTES.txt       README.md       Tools
wizard23@Philipps-iMac MS3000-Firmware % ls -alF
total 64
drwxr-xr-x  12 wizard23  staff   384 Mar 15 18:34 ./
drwxr-xr-x  18 wizard23  staff   576 Mar 15 18:33 ../
-rw-r--r--   1 wizard23  staff    40 Mar 15 18:34 .git
-rw-r--r--   1 wizard23  staff   420 Mar 15 18:34 .gitignore
-rw-r--r--   1 wizard23  staff   650 Mar 15 18:34 .gitmodules
drwxr-xr-x   4 wizard23  staff   128 Mar 15 18:34 Docs/
drwxr-xr-x  19 wizard23  staff   608 Mar 15 18:34 MS3KOS/
-rw-r--r--   1 wizard23  staff   105 Mar 15 18:34 Makefile
-rwxr-xr-x   1 wizard23  staff  3259 Mar 15 18:34 Makefile.tests*
-rw-r--r--   1 wizard23  staff   422 Mar 15 18:34 NOTES.txt
-rw-r--r--   1 wizard23  staff  7676 Mar 15 18:34 README.md
drwxr-xr-x  16 wizard23  staff   512 Mar 15 18:34 Tools/
wizard23@Philipps-iMac MS3000-Firmware % make  
make -C MS3KOS/
Makefile:3: ../Tools/nanopb/extra/nanopb.mk: No such file or directory
make[1]: *** No rule to make target `../Tools/nanopb/extra/nanopb.mk'.  Stop.
make: *** [all] Error 2
wizard23@Philipps-iMac MS3000-Firmware % make clean
make: *** No rule to make target `clean'.  Stop.
wizard23@Philipps-iMac MS3000-Firmware % ls
Docs            MS3KOS          Makefile        Makefile.tests  NOTES.txt       README.md       Tools
wizard23@Philipps-iMac MS3000-Firmware % cd Tools/nanopb 
wizard23@Philipps-iMac nanopb % l
zsh: command not found: l
wizard23@Philipps-iMac nanopb % ls
wizard23@Philipps-iMac nanopb % git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.
wizard23@Philipps-iMac nanopb % ls
AUTHORS.txt             LICENSE.txt             WORKSPACE               docs                    meson.build             pb_decode.c             spm-test                zephyr
BUILD.bazel             MODULE.bazel            build-tests             examples                meson_options.txt       pb_decode.h             spm_headers
CHANGELOG.txt           MODULE.bazel.lock       build.py                extra                   pb.h                    pb_encode.c             spm_resources
CMakeLists.txt          Package.swift           conan-wrapper           generator               pb_common.c             pb_encode.h             tests
CONTRIBUTING.md         README.md               conanfile.py            library.json            pb_common.h             requirements.txt        tools
wizard23@Philipps-iMac nanopb % make
make: *** No targets specified and no makefile found.  Stop.
wizard23@Philipps-iMac nanopb % cd tools 
wizard23@Philipps-iMac tools % ls
list_authors.sh         make_linux_package.sh   make_mac_package.sh     make_windows_package.sh set_version.sh
wizard23@Philipps-iMac tools % cd 
wizard23@Philipps-iMac tools % ./make_mac_package.sh 
++ git describe --always
+ VERSION=nanopb-0.4.9-88-gd68cd4e-macosx-x86
+ DEST=dist/nanopb-0.4.9-88-gd68cd4e-macosx-x86
+ rm -rf dist/nanopb-0.4.9-88-gd68cd4e-macosx-x86
+ mkdir -p dist/nanopb-0.4.9-88-gd68cd4e-macosx-x86
+ git archive HEAD
+ tar x -C dist/nanopb-0.4.9-88-gd68cd4e-macosx-x86
+ cd dist/nanopb-0.4.9-88-gd68cd4e-macosx-x86/generator
./make_mac_package.sh: line 21: cd: dist/nanopb-0.4.9-88-gd68cd4e-macosx-x86/generator: No such file or directory
wizard23@Philipps-iMac tools % cd ../../
wizard23@Philipps-iMac Tools % ls
ESP8266_ota             MS3000Tool.py.bak       MS3000_init.sh          esptool                 genBuildList.sh         nanopb                  writeFirmware.sh
MS3000Tool.py           MS3000Tool_NewWeb.py    buildSettingsAP.sh      esptool-ck              mklittlefs              readFirmware.sh
wizard23@Philipps-iMac Tools % pwd
/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware/Tools
wizard23@Philipps-iMac Tools % cd ../../
wizard23@Philipps-iMac MS3000 % l
zsh: command not found: l
wizard23@Philipps-iMac MS3000 % ls
MS3000-Assets           MS3000-WebInterface     MS3000.pb.c             MS3000.proto            README.md               git_aliases.sh
MS3000-Firmware         MS3000.options          MS3000.pb.h             Makefile                build-1.0.0_log.txt     lab
wizard23@Philipps-iMac MS3000 % cd MS3000-Firmware 
wizard23@Philipps-iMac MS3000-Firmware % ls
Docs            MS3KOS          Makefile        Makefile.tests  NOTES.txt       README.md       Tools
wizard23@Philipps-iMac MS3000-Firmware % cd MS3KOS 
wizard23@Philipps-iMac MS3KOS % make
# !J! Todo: BUILD_PRODUCT_DIR
#rm -rf .pioenvs
pio run -t clean
make: pio: No such file or directory
make: *** [clean] Error 1
wizard23@Philipps-iMac MS3KOS % ls
MS3000.pb.c             Makefile                data                    lib                     platformio.ini          requirements.txt
MS3000.pb.h             RELEASE.txt             doc                     notes.md                readme.md               src
wizard23@Philipps-iMac MS3KOS % cd ..
wizard23@Philipps-iMac MS3000-Firmware % make
make -C MS3KOS/
# !J! Todo: BUILD_PRODUCT_DIR
#rm -rf .pioenvs
pio run -t clean
make[1]: pio: No such file or directory
make[1]: *** [clean] Error 1
make: *** [all] Error 2
wizard23@Philipps-iMac MS3000-Firmware % git status
HEAD detached at 4fe6c08
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   Tools/mklittlefs (new commits)
        modified:   Tools/nanopb (new commits)

no changes added to commit (use "git add" and/or "git commit -a")
wizard23@Philipps-iMac MS3000-Firmware % cd nanop
cd: no such file or directory: nanop
wizard23@Philipps-iMac MS3000-Firmware % l
zsh: command not found: l
wizard23@Philipps-iMac MS3000-Firmware % cd Tools/nanopb 
wizard23@Philipps-iMac nanopb % ls
AUTHORS.txt             LICENSE.txt             WORKSPACE               docs                    meson.build             pb_decode.c             spm-test                zephyr
BUILD.bazel             MODULE.bazel            build-tests             examples                meson_options.txt       pb_decode.h             spm_headers
CHANGELOG.txt           MODULE.bazel.lock       build.py                extra                   pb.h                    pb_encode.c             spm_resources
CMakeLists.txt          Package.swift           conan-wrapper           generator               pb_common.c             pb_encode.h             tests
CONTRIBUTING.md         README.md               conanfile.py            library.json            pb_common.h             requirements.txt        tools
wizard23@Philipps-iMac nanopb % cd extra 
wizard23@Philipps-iMac extra % ls
FindNanopb.cmake                nanopb-config-version.cmake.in  nanopb.mk                       poetry                          requirements_lock.txt
bazel                           nanopb-config.cmake             pb_syshdr.h                     requirements.txt                script_wrappers
wizard23@Philipps-iMac extra % python -m venv venv           
wizard23@Philipps-iMac extra % . venv/bin/activate
((venv) ) wizard23@Philipps-iMac extra % python -r requirements.txt 
Unknown option: -r
usage: python [option] ... [-c cmd | -m mod | file | -] [arg] ...
Try `python -h' for more information.
((venv) ) wizard23@Philipps-iMac extra % pip install -r requirements.txt 
Collecting grpcio-tools==1.68.0 (from -r requirements.txt (line 1))
  Downloading grpcio_tools-1.68.0-cp312-cp312-macosx_10_9_universal2.whl.metadata (5.3 kB)
Collecting setuptools>=66.1.0 (from -r requirements.txt (line 2))
  Downloading setuptools-82.0.1-py3-none-any.whl.metadata (6.5 kB)
Collecting protobuf<6.0dev,>=5.26.1 (from grpcio-tools==1.68.0->-r requirements.txt (line 1))
  Downloading protobuf-5.29.6-cp38-abi3-macosx_10_9_universal2.whl.metadata (592 bytes)
Collecting grpcio>=1.68.0 (from grpcio-tools==1.68.0->-r requirements.txt (line 1))
  Downloading grpcio-1.78.0-cp312-cp312-macosx_11_0_universal2.whl.metadata (3.8 kB)
Collecting typing-extensions~=4.12 (from grpcio>=1.68.0->grpcio-tools==1.68.0->-r requirements.txt (line 1))
  Using cached typing_extensions-4.15.0-py3-none-any.whl.metadata (3.3 kB)
Downloading grpcio_tools-1.68.0-cp312-cp312-macosx_10_9_universal2.whl (5.6 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 5.6/5.6 MB 3.3 MB/s eta 0:00:00
Downloading setuptools-82.0.1-py3-none-any.whl (1.0 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.0/1.0 MB 8.7 MB/s eta 0:00:00
Downloading grpcio-1.78.0-cp312-cp312-macosx_11_0_universal2.whl (11.8 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 11.8/11.8 MB 8.2 MB/s eta 0:00:00
Downloading protobuf-5.29.6-cp38-abi3-macosx_10_9_universal2.whl (418 kB)
Using cached typing_extensions-4.15.0-py3-none-any.whl (44 kB)
Installing collected packages: typing-extensions, setuptools, protobuf, grpcio, grpcio-tools
Successfully installed grpcio-1.78.0 grpcio-tools-1.68.0 protobuf-5.29.6 setuptools-82.0.1 typing-extensions-4.15.0

[notice] A new release of pip is available: 25.0.1 -> 26.0.1
[notice] To update, run: pip install --upgrade pip
((venv) ) wizard23@Philipps-iMac extra % ls
FindNanopb.cmake                nanopb-config-version.cmake.in  nanopb.mk                       poetry                          requirements_lock.txt           venv
bazel                           nanopb-config.cmake             pb_syshdr.h                     requirements.txt                script_wrappers
((venv) ) wizard23@Philipps-iMac extra % cd ..
((venv) ) wizard23@Philipps-iMac nanopb % ls
AUTHORS.txt             LICENSE.txt             WORKSPACE               docs                    meson.build             pb_decode.c             spm-test                zephyr
BUILD.bazel             MODULE.bazel            build-tests             examples                meson_options.txt       pb_decode.h             spm_headers
CHANGELOG.txt           MODULE.bazel.lock       build.py                extra                   pb.h                    pb_encode.c             spm_resources
CMakeLists.txt          Package.swift           conan-wrapper           generator               pb_common.c             pb_encode.h             tests
CONTRIBUTING.md         README.md               conanfile.py            library.json            pb_common.h             requirements.txt        tools
((venv) ) wizard23@Philipps-iMac nanopb % cd ..
((venv) ) wizard23@Philipps-iMac Tools % ls
ESP8266_ota             MS3000Tool.py.bak       MS3000_init.sh          esptool                 genBuildList.sh         nanopb                  writeFirmware.sh
MS3000Tool.py           MS3000Tool_NewWeb.py    buildSettingsAP.sh      esptool-ck              mklittlefs              readFirmware.sh
((venv) ) wizard23@Philipps-iMac Tools % cd ..
((venv) ) wizard23@Philipps-iMac MS3000-Firmware % ls
Docs            MS3KOS          Makefile        Makefile.tests  NOTES.txt       README.md       Tools
((venv) ) wizard23@Philipps-iMac MS3000-Firmware % cd MS3KOS 
((venv) ) wizard23@Philipps-iMac MS3KOS % ls
MS3000.pb.c             Makefile                data                    lib                     platformio.ini          requirements.txt
MS3000.pb.h             RELEASE.txt             doc                     notes.md                readme.md               src
((venv) ) wizard23@Philipps-iMac MS3KOS % make
# !J! Todo: BUILD_PRODUCT_DIR
#rm -rf .pioenvs
pio run -t clean
make: pio: No such file or directory
make: *** [clean] Error 1
((venv) ) wizard23@Philipps-iMac MS3KOS % pio
zsh: command not found: pio
((venv) ) wizard23@Philipps-iMac MS3KOS % pip install platformio
Collecting platformio
  Downloading platformio-6.1.19-py3-none-any.whl.metadata (7.2 kB)
Collecting bottle==0.13.* (from platformio)
  Downloading bottle-0.13.4-py2.py3-none-any.whl.metadata (1.6 kB)
Collecting click<8.4,>=8.0.4 (from platformio)
  Downloading click-8.3.1-py3-none-any.whl.metadata (2.6 kB)
Collecting colorama (from platformio)
  Downloading colorama-0.4.6-py2.py3-none-any.whl.metadata (17 kB)
Collecting marshmallow==3.* (from platformio)
  Downloading marshmallow-3.26.2-py3-none-any.whl.metadata (7.3 kB)
Collecting pyelftools<1,>=0.27 (from platformio)
  Downloading pyelftools-0.32-py3-none-any.whl.metadata (372 bytes)
Collecting pyserial==3.5.* (from platformio)
  Downloading pyserial-3.5-py2.py3-none-any.whl.metadata (1.6 kB)
Collecting requests==2.* (from platformio)
  Using cached requests-2.32.5-py3-none-any.whl.metadata (4.9 kB)
Collecting semantic_version==2.10.* (from platformio)
  Downloading semantic_version-2.10.0-py2.py3-none-any.whl.metadata (9.7 kB)
Collecting tabulate==0.* (from platformio)
  Downloading tabulate-0.10.0-py3-none-any.whl.metadata (40 kB)
Collecting ajsonrpc==1.2.* (from platformio)
  Downloading ajsonrpc-1.2.0-py3-none-any.whl.metadata (6.9 kB)
Collecting starlette<0.53,>=0.19 (from platformio)
  Downloading starlette-0.52.1-py3-none-any.whl.metadata (6.3 kB)
Collecting uvicorn<0.41,>=0.16 (from platformio)
  Downloading uvicorn-0.40.0-py3-none-any.whl.metadata (6.7 kB)
Collecting wsproto==1.* (from platformio)
  Downloading wsproto-1.3.2-py3-none-any.whl.metadata (5.2 kB)
Collecting packaging>=17.0 (from marshmallow==3.*->platformio)
  Downloading packaging-26.0-py3-none-any.whl.metadata (3.3 kB)
Collecting charset_normalizer<4,>=2 (from requests==2.*->platformio)
  Downloading charset_normalizer-3.4.5-cp312-cp312-macosx_10_13_universal2.whl.metadata (39 kB)
Collecting idna<4,>=2.5 (from requests==2.*->platformio)
  Using cached idna-3.11-py3-none-any.whl.metadata (8.4 kB)
Collecting urllib3<3,>=1.21.1 (from requests==2.*->platformio)
  Using cached urllib3-2.6.3-py3-none-any.whl.metadata (6.9 kB)
Collecting certifi>=2017.4.17 (from requests==2.*->platformio)
  Downloading certifi-2026.2.25-py3-none-any.whl.metadata (2.5 kB)
Collecting h11<1,>=0.16.0 (from wsproto==1.*->platformio)
  Downloading h11-0.16.0-py3-none-any.whl.metadata (8.3 kB)
Collecting anyio<5,>=3.6.2 (from starlette<0.53,>=0.19->platformio)
  Downloading anyio-4.12.1-py3-none-any.whl.metadata (4.3 kB)
Requirement already satisfied: typing-extensions>=4.10.0 in /Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware/Tools/nanopb/extra/venv/lib/python3.12/site-packages (from starlette<0.53,>=0.19->platformio) (4.15.0)
Downloading platformio-6.1.19-py3-none-any.whl (421 kB)
Downloading ajsonrpc-1.2.0-py3-none-any.whl (22 kB)
Downloading bottle-0.13.4-py2.py3-none-any.whl (103 kB)
Downloading marshmallow-3.26.2-py3-none-any.whl (50 kB)
Downloading pyserial-3.5-py2.py3-none-any.whl (90 kB)
Using cached requests-2.32.5-py3-none-any.whl (64 kB)
Downloading semantic_version-2.10.0-py2.py3-none-any.whl (15 kB)
Downloading tabulate-0.10.0-py3-none-any.whl (39 kB)
Downloading wsproto-1.3.2-py3-none-any.whl (24 kB)
Downloading click-8.3.1-py3-none-any.whl (108 kB)
Downloading pyelftools-0.32-py3-none-any.whl (188 kB)
Downloading starlette-0.52.1-py3-none-any.whl (74 kB)
Downloading uvicorn-0.40.0-py3-none-any.whl (68 kB)
Downloading colorama-0.4.6-py2.py3-none-any.whl (25 kB)
Downloading anyio-4.12.1-py3-none-any.whl (113 kB)
Downloading certifi-2026.2.25-py3-none-any.whl (153 kB)
Downloading charset_normalizer-3.4.5-cp312-cp312-macosx_10_13_universal2.whl (280 kB)
Downloading h11-0.16.0-py3-none-any.whl (37 kB)
Using cached idna-3.11-py3-none-any.whl (71 kB)
Downloading packaging-26.0-py3-none-any.whl (74 kB)
Using cached urllib3-2.6.3-py3-none-any.whl (131 kB)
Installing collected packages: pyserial, pyelftools, bottle, urllib3, tabulate, semantic_version, packaging, idna, h11, colorama, click, charset_normalizer, certifi, ajsonrpc, wsproto, uvicorn, requests, marshmallow, anyio, starlette, platformio
Successfully installed ajsonrpc-1.2.0 anyio-4.12.1 bottle-0.13.4 certifi-2026.2.25 charset_normalizer-3.4.5 click-8.3.1 colorama-0.4.6 h11-0.16.0 idna-3.11 marshmallow-3.26.2 packaging-26.0 platformio-6.1.19 pyelftools-0.32 pyserial-3.5 requests-2.32.5 semantic_version-2.10.0 starlette-0.52.1 tabulate-0.10.0 urllib3-2.6.3 uvicorn-0.40.0 wsproto-1.3.2

[notice] A new release of pip is available: 25.0.1 -> 26.0.1
[notice] To update, run: pip install --upgrade pip
((venv) ) wizard23@Philipps-iMac MS3KOS % gs
zsh: command not found: gs
((venv) ) wizard23@Philipps-iMac MS3KOS % git status
HEAD detached at 4fe6c08
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)
        modified:   ../Tools/mklittlefs (new commits)
        modified:   ../Tools/nanopb (new commits, untracked content)

no changes added to commit (use "git add" and/or "git commit -a")
((venv) ) wizard23@Philipps-iMac MS3KOS % cd ../Tools/nanopb 
((venv) ) wizard23@Philipps-iMac nanopb % ls
AUTHORS.txt             LICENSE.txt             WORKSPACE               docs                    meson.build             pb_decode.c             spm-test                zephyr
BUILD.bazel             MODULE.bazel            build-tests             examples                meson_options.txt       pb_decode.h             spm_headers
CHANGELOG.txt           MODULE.bazel.lock       build.py                extra                   pb.h                    pb_encode.c             spm_resources
CMakeLists.txt          Package.swift           conan-wrapper           generator               pb_common.c             pb_encode.h             tests
CONTRIBUTING.md         README.md               conanfile.py            library.json            pb_common.h             requirements.txt        tools
((venv) ) wizard23@Philipps-iMac nanopb % cd extra 
((venv) ) wizard23@Philipps-iMac extra % ls
FindNanopb.cmake                nanopb-config-version.cmake.in  nanopb.mk                       poetry                          requirements_lock.txt           venv
bazel                           nanopb-config.cmake             pb_syshdr.h                     requirements.txt                script_wrappers
((venv) ) wizard23@Philipps-iMac extra % pwd
/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware/Tools/nanopb/extra
((venv) ) wizard23@Philipps-iMac extra % ls -l
total 104
-rw-r--r--  1 wizard23  staff  18740 Mar 15 18:35 FindNanopb.cmake
drwxr-xr-x  7 wizard23  staff    224 Mar 15 18:35 bazel
-rw-r--r--  1 wizard23  staff    401 Mar 15 18:35 nanopb-config-version.cmake.in
-rw-r--r--  1 wizard23  staff     57 Mar 15 18:35 nanopb-config.cmake
-rw-r--r--  1 wizard23  staff   1091 Mar 15 18:35 nanopb.mk
-rw-r--r--  1 wizard23  staff   2451 Mar 15 18:35 pb_syshdr.h
drwxr-xr-x  4 wizard23  staff    128 Mar 15 18:35 poetry
-rw-r--r--  1 wizard23  staff     42 Mar 15 18:35 requirements.txt
-rw-r--r--  1 wizard23  staff  10885 Mar 15 18:35 requirements_lock.txt
drwxr-xr-x  3 wizard23  staff     96 Mar 15 18:35 script_wrappers
drwxr-xr-x@ 6 wizard23  staff    192 Mar 15 18:42 venv
((venv) ) wizard23@Philipps-iMac extra % cd ../../
((venv) ) wizard23@Philipps-iMac Tools % pio
Usage: pio [OPTIONS] COMMAND [ARGS]...

Options:
  --version          Show the version and exit.
  -c, --caller TEXT  Caller ID (service)
  --no-ansi          Do not print ANSI control characters
  -h, --help         Show this message and exit.

Commands:
  access    Manage resource access
  account   Manage PlatformIO account
  boards    Board Explorer
  check     Static Code Analysis
  ci        Continuous Integration
  debug     Unified Debugger
  device    Device manager & Serial/Socket monitor
  home      GUI to manage PlatformIO
  org       Manage organizations
  pkg       Unified Package Manager
  project   Project Manager
  remote    Remote Development
  run       Run project targets (build, upload, clean, etc.)
  settings  Manage system settings
  system    Miscellaneous system commands
  team      Manage organization teams
  test      Unit Testing
  upgrade   Upgrade PlatformIO Core to the latest version
((venv) ) wizard23@Philipps-iMac Tools % ls  
ESP8266_ota             MS3000Tool.py.bak       MS3000_init.sh          esptool                 genBuildList.sh         nanopb                  writeFirmware.sh
MS3000Tool.py           MS3000Tool_NewWeb.py    buildSettingsAP.sh      esptool-ck              mklittlefs              readFirmware.sh
((venv) ) wizard23@Philipps-iMac Tools % cd .
((venv) ) wizard23@Philipps-iMac Tools % cd ..
((venv) ) wizard23@Philipps-iMac MS3000-Firmware % ls
Docs            MS3KOS          Makefile        Makefile.tests  NOTES.txt       README.md       Tools
((venv) ) wizard23@Philipps-iMac MS3000-Firmware % cd MS3KOS 
((venv) ) wizard23@Philipps-iMac MS3KOS % pwd
/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware/MS3KOS
((venv) ) wizard23@Philipps-iMac MS3KOS % make
# !J! Todo: BUILD_PRODUCT_DIR
#rm -rf .pioenvs
pio run -t clean
*******************************************************************************************************************************************************************************************************************
If you like PlatformIO, please:
- star it on GitHub > https://github.com/platformio/platformio-core
- follow us on LinkedIn to stay up-to-date on the latest project news > https://www.linkedin.com/company/platformio/
- try PlatformIO IDE for embedded development > https://platformio.org/platformio-ide
*******************************************************************************************************************************************************************************************************************

Processing ms3000 (platform: espressif8266; framework: arduino; board: esp12e)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Platform Manager: Installing espressif8266
Downloading  [####################################]  100%
Unpacking  [####################################]  100%
Platform Manager: espressif8266@4.2.1 has been installed!
Tool Manager: Installing platformio/tool-scons @ ~4.40801.0
Downloading  [####################################]  100%
Unpacking  [####################################]  100%
Tool Manager: tool-scons@4.40801.0 has been installed!
Verbose mode can be enabled via `-v, --verbose` option
Removing .pio/build/ms3000
Done cleaning
=========================================================================================== [SUCCESS] Took 4.52 seconds ===========================================================================================
rm -rf src/MS3000.pb.c src/MS3000.pb.h
NANOPB_DIR = ../Tools/nanopb
CFLAGS = -I../Tools/nanopb -DPB_FIELD_16BIT
../Tools/nanopb/generator/protoc  -I../Tools/nanopb/generator/proto --proto_path ../../ ../../MS3000.proto  -o ../../MS3000.pb --js_out=./ms3000.proto.out --nanopb_out=-v:.
protoc-gen-js: program not found or is not executable
Please specify a program using absolute path or make sure the program is available in your PATH system variable
--js_out: protoc-gen-js: Plugin failed with status code 1.
make: *** [proto] Error 1
((venv) ) wizard23@Philipps-iMac MS3KOS % cd ../Tools/nanopb/     
((venv) ) wizard23@Philipps-iMac nanopb % ls
AUTHORS.txt             LICENSE.txt             WORKSPACE               docs                    meson.build             pb_decode.c             spm-test                zephyr
BUILD.bazel             MODULE.bazel            build-tests             examples                meson_options.txt       pb_decode.h             spm_headers
CHANGELOG.txt           MODULE.bazel.lock       build.py                extra                   pb.h                    pb_encode.c             spm_resources
CMakeLists.txt          Package.swift           conan-wrapper           generator               pb_common.c             pb_encode.h             tests
CONTRIBUTING.md         README.md               conanfile.py            library.json            pb_common.h             requirements.txt        tools
((venv) ) wizard23@Philipps-iMac nanopb % cd generator 
((venv) ) wizard23@Philipps-iMac generator % ls
__init__.py             nanopb_generator.bat    platformio_generator.py protoc                  protoc-gen-nanopb.bat
nanopb_generator        nanopb_generator.py     proto                   protoc-gen-nanopb       protoc.bat
((venv) ) wizard23@Philipps-iMac generator % cd protoc
cd: not a directory: protoc
((venv) ) wizard23@Philipps-iMac generator % ls
__init__.py             nanopb_generator.bat    platformio_generator.py protoc                  protoc-gen-nanopb.bat
nanopb_generator        nanopb_generator.py     proto                   protoc-gen-nanopb       protoc.bat
((venv) ) wizard23@Philipps-iMac generator % ls -l
total 304
-rw-r--r--  1 wizard23  staff       0 Mar 15 18:35 __init__.py
-rwxr-xr-x  1 wizard23  staff     235 Mar 15 18:35 nanopb_generator
-rw-r--r--  1 wizard23  staff     206 Mar 15 18:35 nanopb_generator.bat
-rwxr-xr-x  1 wizard23  staff  120244 Mar 15 18:35 nanopb_generator.py
-rw-r--r--  1 wizard23  staff    6705 Mar 15 18:35 platformio_generator.py
drwxr-xr-x  8 wizard23  staff     256 Mar 15 18:45 proto
-rwxr-xr-x  1 wizard23  staff    1801 Mar 15 18:35 protoc
-rwxr-xr-x  1 wizard23  staff     374 Mar 15 18:35 protoc-gen-nanopb
-rw-r--r--  1 wizard23  staff     449 Mar 15 18:35 protoc-gen-nanopb.bat
-rw-r--r--  1 wizard23  staff     302 Mar 15 18:35 protoc.bat
((venv) ) wizard23@Philipps-iMac generator % ls proto
Makefile        __init__.py     __pycache__     _utils.py       google          nanopb.proto
((venv) ) wizard23@Philipps-iMac generator % cd ../../
((venv) ) wizard23@Philipps-iMac Tools % ls
ESP8266_ota             MS3000Tool.py.bak       MS3000_init.sh          esptool                 genBuildList.sh         nanopb                  writeFirmware.sh
MS3000Tool.py           MS3000Tool_NewWeb.py    buildSettingsAP.sh      esptool-ck              mklittlefs              readFirmware.sh
((venv) ) wizard23@Philipps-iMac Tools % cd nanopb 
((venv) ) wizard23@Philipps-iMac nanopb % ls
AUTHORS.txt             LICENSE.txt             WORKSPACE               docs                    meson.build             pb_decode.c             spm-test                zephyr
BUILD.bazel             MODULE.bazel            build-tests             examples                meson_options.txt       pb_decode.h             spm_headers
CHANGELOG.txt           MODULE.bazel.lock       build.py                extra                   pb.h                    pb_encode.c             spm_resources
CMakeLists.txt          Package.swift           conan-wrapper           generator               pb_common.c             pb_encode.h             tests
CONTRIBUTING.md         README.md               conanfile.py            library.json            pb_common.h             requirements.txt        tools
((venv) ) wizard23@Philipps-iMac nanopb % cd extra 
((venv) ) wizard23@Philipps-iMac extra % ls
FindNanopb.cmake                nanopb-config-version.cmake.in  nanopb.mk                       poetry                          requirements_lock.txt           venv
bazel                           nanopb-config.cmake             pb_syshdr.h                     requirements.txt                script_wrappers
((venv) ) wizard23@Philipps-iMac extra % make
make: *** No targets specified and no makefile found.  Stop.
((venv) ) wizard23@Philipps-iMac extra % ls -l
total 104
-rw-r--r--  1 wizard23  staff  18740 Mar 15 18:35 FindNanopb.cmake
drwxr-xr-x  7 wizard23  staff    224 Mar 15 18:35 bazel
-rw-r--r--  1 wizard23  staff    401 Mar 15 18:35 nanopb-config-version.cmake.in
-rw-r--r--  1 wizard23  staff     57 Mar 15 18:35 nanopb-config.cmake
-rw-r--r--  1 wizard23  staff   1091 Mar 15 18:35 nanopb.mk
-rw-r--r--  1 wizard23  staff   2451 Mar 15 18:35 pb_syshdr.h
drwxr-xr-x  4 wizard23  staff    128 Mar 15 18:35 poetry
-rw-r--r--  1 wizard23  staff     42 Mar 15 18:35 requirements.txt
-rw-r--r--  1 wizard23  staff  10885 Mar 15 18:35 requirements_lock.txt
drwxr-xr-x  3 wizard23  staff     96 Mar 15 18:35 script_wrappers
drwxr-xr-x@ 6 wizard23  staff    192 Mar 15 18:42 venv
((venv) ) wizard23@Philipps-iMac extra % cd ..
((venv) ) wizard23@Philipps-iMac nanopb % ls
AUTHORS.txt             LICENSE.txt             WORKSPACE               docs                    meson.build             pb_decode.c             spm-test                zephyr
BUILD.bazel             MODULE.bazel            build-tests             examples                meson_options.txt       pb_decode.h             spm_headers
CHANGELOG.txt           MODULE.bazel.lock       build.py                extra                   pb.h                    pb_encode.c             spm_resources
CMakeLists.txt          Package.swift           conan-wrapper           generator               pb_common.c             pb_encode.h             tests
CONTRIBUTING.md         README.md               conanfile.py            library.json            pb_common.h             requirements.txt        tools
((venv) ) wizard23@Philipps-iMac nanopb % cd ..
((venv) ) wizard23@Philipps-iMac Tools % ls
ESP8266_ota             MS3000Tool.py.bak       MS3000_init.sh          esptool                 genBuildList.sh         nanopb                  writeFirmware.sh
MS3000Tool.py           MS3000Tool_NewWeb.py    buildSettingsAP.sh      esptool-ck              mklittlefs              readFirmware.sh
((venv) ) wizard23@Philipps-iMac Tools % cd ..
((venv) ) wizard23@Philipps-iMac MS3000-Firmware % ls
Docs            MS3KOS          Makefile        Makefile.tests  NOTES.txt       README.md       Tools
((venv) ) wizard23@Philipps-iMac MS3000-Firmware % cd MS3KOS 
((venv) ) wizard23@Philipps-iMac MS3KOS % make
# !J! Todo: BUILD_PRODUCT_DIR
#rm -rf .pioenvs
pio run -t clean
Processing ms3000 (platform: espressif8266; framework: arduino; board: esp12e)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Verbose mode can be enabled via `-v, --verbose` option
Removing .pio/build/ms3000
Done cleaning
=========================================================================================== [SUCCESS] Took 0.32 seconds ===========================================================================================
rm -rf src/MS3000.pb.c src/MS3000.pb.h
NANOPB_DIR = ../Tools/nanopb
CFLAGS = -I../Tools/nanopb -DPB_FIELD_16BIT
../Tools/nanopb/generator/protoc  -I../Tools/nanopb/generator/proto --proto_path ../../ ../../MS3000.proto  -o ../../MS3000.pb --js_out=./ms3000.proto.out --nanopb_out=-v:.
protoc-gen-js: program not found or is not executable
Please specify a program using absolute path or make sure the program is available in your PATH system variable
--js_out: protoc-gen-js: Plugin failed with status code 1.
make: *** [proto] Error 1
((venv) ) wizard23@Philipps-iMac MS3KOS % find ../Tools/nanopb -name "protoc-gen*" -print
../Tools/nanopb/generator/protoc-gen-nanopb
../Tools/nanopb/generator/protoc-gen-nanopb.bat
((venv) ) wizard23@Philipps-iMac MS3KOS % cd ../Tools/nanopb 
((venv) ) wizard23@Philipps-iMac nanopb % git branch -av
* master                                  d68cd4e fix(platformio): handle subdirectories when preserve_directory_hierarchy=true
  remotes/origin/HEAD                     -> origin/master
  remotes/origin/dev_1.0                  30d0ef6 Add minimal support for protobuf editions (#900)
  remotes/origin/dev_dynamic_nanopb_pb2_2 6e900cb Add option NANOPB_PB2_TEMP_DIR to store nanopb_pb2.py in a temporary directory (#601)
  remotes/origin/dev_pr_1063              cc10194 Fix Windows build error in test case #1061
  remotes/origin/maintenance_0.1          62bbe46 Publishing nanopb-0.1.9.1
  remotes/origin/maintenance_0.2          cd23364 Publishing nanopb-0.2.9.5
  remotes/origin/maintenance_0.3          c87a41d Update Python2 CI workflow to Ubuntu 20.04
  remotes/origin/maintenance_0.4          cad3c18 Releasing 0.4.9.1 bugfix release
  remotes/origin/master                   d68cd4e fix(platformio): handle subdirectories when preserve_directory_hierarchy=true
  remotes/origin/pr947                    815879d Fix-up iter_begin_extension for progmem + cleanup
((venv) ) wizard23@Philipps-iMac nanopb % git fetch --all
((venv) ) wizard23@Philipps-iMac nanopb % git checkout -b origin/maintenance_0.4 maintenance_0.4
fatal: 'maintenance_0.4' is not a commit and a branch 'origin/maintenance_0.4' cannot be created from it
((venv) ) wizard23@Philipps-iMac nanopb % git checkout -b maintenance_0.4 origin/maintenance_0.4 
branch 'maintenance_0.4' set up to track 'origin/maintenance_0.4'.
Switched to a new branch 'maintenance_0.4'
((venv) ) wizard23@Philipps-iMac nanopb % ls 
AUTHORS.txt             LICENSE.txt             WORKSPACE               docs                    pb.h                    pb_encode.c             spm_resources
BUILD.bazel             MODULE.bazel            build-tests             examples                pb_common.c             pb_encode.h             tests
CHANGELOG.txt           MODULE.bazel.lock       build.py                extra                   pb_common.h             requirements.txt        tools
CMakeLists.txt          Package.swift           conan-wrapper           generator               pb_decode.c             spm-test                zephyr
CONTRIBUTING.md         README.md               conanfile.py            library.json            pb_decode.h             spm_headers
((venv) ) wizard23@Philipps-iMac nanopb % cd extr
cd: no such file or directory: extr
((venv) ) wizard23@Philipps-iMac nanopb % ls
AUTHORS.txt             LICENSE.txt             WORKSPACE               docs                    pb.h                    pb_encode.c             spm_resources
BUILD.bazel             MODULE.bazel            build-tests             examples                pb_common.c             pb_encode.h             tests
CHANGELOG.txt           MODULE.bazel.lock       build.py                extra                   pb_common.h             requirements.txt        tools
CMakeLists.txt          Package.swift           conan-wrapper           generator               pb_decode.c             spm-test                zephyr
CONTRIBUTING.md         README.md               conanfile.py            library.json            pb_decode.h             spm_headers
((venv) ) wizard23@Philipps-iMac nanopb % cd extra 
((venv) ) wizard23@Philipps-iMac extra % ls
FindNanopb.cmake                nanopb-config-version.cmake.in  nanopb.mk                       poetry                          requirements_lock.txt           venv
bazel                           nanopb-config.cmake             pb_syshdr.h                     requirements.txt                script_wrappers
((venv) ) wizard23@Philipps-iMac extra % ls -alF
total 104
drwxr-xr-x  13 wizard23  staff    416 Mar 15 18:48 ./
drwxr-xr-x  41 wizard23  staff   1312 Mar 15 18:48 ../
-rw-r--r--   1 wizard23  staff  17872 Mar 15 18:48 FindNanopb.cmake
drwxr-xr-x   7 wizard23  staff    224 Mar 15 18:48 bazel/
-rw-r--r--   1 wizard23  staff    401 Mar 15 18:35 nanopb-config-version.cmake.in
-rw-r--r--   1 wizard23  staff     57 Mar 15 18:35 nanopb-config.cmake
-rw-r--r--   1 wizard23  staff   1091 Mar 15 18:35 nanopb.mk
-rw-r--r--   1 wizard23  staff   2451 Mar 15 18:35 pb_syshdr.h
drwxr-xr-x   4 wizard23  staff    128 Mar 15 18:48 poetry/
-rw-r--r--   1 wizard23  staff     42 Mar 15 18:35 requirements.txt
-rw-r--r--   1 wizard23  staff  10885 Mar 15 18:48 requirements_lock.txt
drwxr-xr-x   3 wizard23  staff     96 Mar 15 18:35 script_wrappers/
drwxr-xr-x@  6 wizard23  staff    192 Mar 15 18:42 venv/
((venv) ) wizard23@Philipps-iMac extra % cd ../tools 
((venv) ) wizard23@Philipps-iMac tools % ls
dist                    list_authors.sh         make_linux_package.sh   make_mac_package.sh     make_windows_package.sh set_version.sh
((venv) ) wizard23@Philipps-iMac tools % ls -l
total 40
drwxr-xr-x  3 wizard23  staff    96 Mar 15 18:36 dist
-rwxr-xr-x  1 wizard23  staff   150 Mar 15 18:35 list_authors.sh
-rwxr-xr-x  1 wizard23  staff  1395 Mar 15 18:35 make_linux_package.sh
-rwxr-xr-x  1 wizard23  staff  1327 Mar 15 18:35 make_mac_package.sh
-rwxr-xr-x  1 wizard23  staff  1556 Mar 15 18:35 make_windows_package.sh
-rwxr-xr-x  1 wizard23  staff   882 Mar 15 18:48 set_version.sh
((venv) ) wizard23@Philipps-iMac tools % ./make_mac_package.sh 
++ git describe --always
+ VERSION=nanopb-0.4.9.1-macosx-x86
+ DEST=dist/nanopb-0.4.9.1-macosx-x86
+ rm -rf dist/nanopb-0.4.9.1-macosx-x86
+ mkdir -p dist/nanopb-0.4.9.1-macosx-x86
+ git archive HEAD
+ tar x -C dist/nanopb-0.4.9.1-macosx-x86
+ cd dist/nanopb-0.4.9.1-macosx-x86/generator
./make_mac_package.sh: line 21: cd: dist/nanopb-0.4.9.1-macosx-x86/generator: No such file or directory
((venv) ) wizard23@Philipps-iMac tools % ls ../
AUTHORS.txt             LICENSE.txt             WORKSPACE               docs                    pb.h                    pb_encode.c             spm_resources
BUILD.bazel             MODULE.bazel            build-tests             examples                pb_common.c             pb_encode.h             tests
CHANGELOG.txt           MODULE.bazel.lock       build.py                extra                   pb_common.h             requirements.txt        tools
CMakeLists.txt          Package.swift           conan-wrapper           generator               pb_decode.c             spm-test                zephyr
CONTRIBUTING.md         README.md               conanfile.py            library.json            pb_decode.h             spm_headers
((venv) ) wizard23@Philipps-iMac tools % cd ../generator 
((venv) ) wizard23@Philipps-iMac generator % ls
__init__.py             nanopb_generator.bat    nanopb_generator.py2    proto                   protoc-gen-nanopb       protoc-gen-nanopb.bat
nanopb_generator        nanopb_generator.py     platformio_generator.py protoc                  protoc-gen-nanopb-py2   protoc.bat
((venv) ) wizard23@Philipps-iMac generator % cd protoc
cd: not a directory: protoc
((venv) ) wizard23@Philipps-iMac generator % ls
__init__.py             nanopb_generator.bat    nanopb_generator.py2    proto                   protoc-gen-nanopb       protoc-gen-nanopb.bat
nanopb_generator        nanopb_generator.py     platformio_generator.py protoc                  protoc-gen-nanopb-py2   protoc.bat
((venv) ) wizard23@Philipps-iMac generator % ls -l
total 312
-rw-r--r--  1 wizard23  staff       0 Mar 15 18:35 __init__.py
-rwxr-xr-x  1 wizard23  staff     235 Mar 15 18:35 nanopb_generator
-rw-r--r--  1 wizard23  staff     206 Mar 15 18:35 nanopb_generator.bat
-rwxr-xr-x  1 wizard23  staff  114728 Mar 15 18:48 nanopb_generator.py
-rwxr-xr-x  1 wizard23  staff     460 Mar 15 18:48 nanopb_generator.py2
-rw-r--r--  1 wizard23  staff    5839 Mar 15 18:48 platformio_generator.py
drwxr-xr-x  8 wizard23  staff     256 Mar 15 18:48 proto
-rwxr-xr-x  1 wizard23  staff    1577 Mar 15 18:48 protoc
-rwxr-xr-x  1 wizard23  staff     374 Mar 15 18:35 protoc-gen-nanopb
-rwxr-xr-x  1 wizard23  staff     554 Mar 15 18:48 protoc-gen-nanopb-py2
-rw-r--r--  1 wizard23  staff     449 Mar 15 18:35 protoc-gen-nanopb.bat
-rw-r--r--  1 wizard23  staff     302 Mar 15 18:35 protoc.bat
((venv) ) wizard23@Philipps-iMac generator % ./protoc 
Missing input file.
((venv) ) wizard23@Philipps-iMac generator % pwd     
/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware/Tools/nanopb/generator
((venv) ) wizard23@Philipps-iMac generator % cd ../../
((venv) ) wizard23@Philipps-iMac Tools % ls
ESP8266_ota             MS3000Tool.py.bak       MS3000_init.sh          esptool                 genBuildList.sh         nanopb                  writeFirmware.sh
MS3000Tool.py           MS3000Tool_NewWeb.py    buildSettingsAP.sh      esptool-ck              mklittlefs              readFirmware.sh
((venv) ) wizard23@Philipps-iMac Tools % pwd
/Users/wizard23/projects/ms3k/MS3000/MS3000-Firmware/Tools
((venv) ) wizard23@Philipps-iMac Tools % cd ../MS3KOS 
((venv) ) wizard23@Philipps-iMac MS3KOS % ls
MS3000.pb.c             Makefile                data                    lib                     notes.md                readme.md               src
MS3000.pb.h             RELEASE.txt             doc                     ms3000.proto.out        platformio.ini          requirements.txt
((venv) ) wizard23@Philipps-iMac MS3KOS % make 
# !J! Todo: BUILD_PRODUCT_DIR
#rm -rf .pioenvs
pio run -t clean
Processing ms3000 (platform: espressif8266; framework: arduino; board: esp12e)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Verbose mode can be enabled via `-v, --verbose` option
Removing .pio/build/ms3000
Done cleaning
=========================================================================================== [SUCCESS] Took 0.32 seconds ===========================================================================================
rm -rf src/MS3000.pb.c src/MS3000.pb.h
NANOPB_DIR = ../Tools/nanopb
CFLAGS = -I../Tools/nanopb -DPB_FIELD_16BIT
../Tools/nanopb/generator/protoc  -I../Tools/nanopb/generator/proto --proto_path ../../ ../../MS3000.proto  -o ../../MS3000.pb --js_out=./ms3000.proto.out --nanopb_out=-v:.
protoc-gen-js: program not found or is not executable
Please specify a program using absolute path or make sure the program is available in your PATH system variable
--js_out: protoc-gen-js: Plugin failed with status code 1.
make: *** [proto] Error 1
((venv) ) wizard23@Philipps-iMac MS3KOS % ../Tools/nanopb/generator/protoc
Missing input file.
((venv) ) wizard23@Philipps-iMac MS3KOS % ../Tools/nanopb/generator/protoc  -I../Tools/nanopb/generator/proto --proto_path ../../ ../../MS3000.proto  -o ../../MS3000.pb --js_out=./ms3000.proto.out --nanopb_out=-v:.

protoc-gen-js: program not found or is not executable
Please specify a program using absolute path or make sure the program is available in your PATH system variable
--js_out: protoc-gen-js: Plugin failed with status code 1.
((venv) ) wizard23@Philipps-iMac MS3KOS % brew search protoc
==> Formulae
libsignal-protocol-c (deprecated)  protoc-gen-go                      protoc-gen-grpc-java               protoc-gen-grpc-web                spice-protocol                     cproto
protoc-gen-doc                     protoc-gen-go-grpc                 protoc-gen-grpc-swift              protoc-gen-js                      proto

==> Casks
protopie
((venv) ) wizard23@Philipps-iMac MS3KOS % brew search protoc-gen-js
==> Formulae
protoc-gen-js                                                          protoc-gen-go                                                          protoc-gen-doc

==> Casks
proton-pass
((venv) ) wizard23@Philipps-iMac MS3KOS % brew install protoc-gen-js
✔︎ JSON API formula.jws.json                                                      Downloaded   31.9MB/ 31.9MB
✔︎ JSON API cask.jws.json                                                         Downloaded   15.4MB/ 15.4MB
Warning: You are using macOS 13.
We (and Apple) do not provide support for this old version.
You may have better luck with MacPorts which supports older versions of macOS:
  https://www.macports.org

This is a Tier 3 configuration:
  https://docs.brew.sh/Support-Tiers#tier-3
You can report issues with Tier 3 configurations to Homebrew/* repositories!
Read the above document before opening any issues or PRs.

==> Fetching downloads for: protoc-gen-js
✔︎ API Source protoc-gen-js.rb                                                    Verified      2.5KB/  2.5KB
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/92151f7a48888d126e7096c1a785e884a36
Already downloaded: /Users/wizard23/Library/Caches/Homebrew/downloads/af6d56e37cb565405beb0e52c11a42ae5a1c08a481575f0e29589f541671bad9--abseil.rb
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/92151f7a48888d126e7096c1a785e884a36
Already downloaded: /Users/wizard23/Library/Caches/Homebrew/downloads/f6cffa86b7fc5929d36d6439ec48983e5ec37a5d628f35a0bc2b8847359d8a41--protobuf.rb
✔︎ Bottle Manifest googletest (1.17.0)                                            Downloaded   10.2KB/ 10.2KB
✔︎ Bottle googletest (1.17.0)                                                     Downloaded  582.2KB/582.2KB
✔︎ API Source abseil.rb                                                           Verified      2.8KB/  2.8KB
✔︎ Formula abseil (20260107.1)                                                    Verified      2.3MB/  2.3MB
✔︎ API Source protobuf.rb                                                         Verified      3.0KB/  3.0KB
✔︎ Formula protobuf (34.0)                                                        Verified      7.0MB/  7.0MB
✔︎ Formula protoc-gen-js (4.0.2)                                                  Verified    425.9KB/425.9KB
Warning: A newer Command Line Tools release is available.
Update them from Software Update in System Settings.

If that doesn't show you any updates, run:
  sudo rm -rf /Library/Developer/CommandLineTools
  sudo xcode-select --install

Alternatively, manually download them from:
  https://developer.apple.com/download/all/.
You should download the Command Line Tools for Xcode 15.2.



This is a Tier 2 configuration:
  https://docs.brew.sh/Support-Tiers#tier-2
You can report issues with Tier 2 configurations to Homebrew/* repositories!
Read the above document before opening any issues or PRs.

==> Installing dependencies for protoc-gen-js: googletest, abseil and protobuf
==> Installing protoc-gen-js dependency: googletest
==> Pouring googletest--1.17.0.ventura.bottle.1.tar.gz
🍺  /usr/local/Cellar/googletest/1.17.0: 76 files, 2.4MB
==> Installing protoc-gen-js dependency: abseil
Warning: A newer Command Line Tools release is available.
Update them from Software Update in System Settings.

If that doesn't show you any updates, run:
  sudo rm -rf /Library/Developer/CommandLineTools
  sudo xcode-select --install

Alternatively, manually download them from:
  https://developer.apple.com/download/all/.
You should download the Command Line Tools for Xcode 15.2.



This is a Tier 2 configuration:
  https://docs.brew.sh/Support-Tiers#tier-2
You can report issues with Tier 2 configurations to Homebrew/* repositories!
Read the above document before opening any issues or PRs.

==> cmake -S . -B build -DCMAKE_INSTALL_RPATH=@loader_path/../lib -DCMAKE_CXX_STANDARD=17 -DBUILD_SHARED_LIB
==> cmake --build build
y
Removing .pio/build/ms3000
Done cleaning
=========================================================================================== [SUCCESS] Took 0.32 seconds ===========================================================================================
rm -rf src/MS3000.pb.c src/MS3000.pb.h
NANOPB_DIR = ../Tools/nanopb
CFLAGS = -I../Tools/nanopb -DPB_FIELD_16BIT
../Tools/nanopb/generator/protoc  -I../Tools/nanopb/generator/proto --proto_path ../../ ../../MS3000.proto  -o ../../MS3000.pb --js_out=./ms3000.proto.out --nanopb_out=-v:.
protoc-gen-js: program not found or is not executable
Please specify a program using absolute path or make sure the program is available in your PATH system variable
--js_out: protoc-gen-js: Plugin failed with status code 1.
make: *** [proto] Error 1
((venv) ) wizard23@Philipps-iMac MS3KOS % find ../Tools/nanopb -name "protoc-gen*" -print
../Tools/nanopb/generator/protoc-gen-nanopb
../Tools/nanopb/generator/protoc-gen-nanopb.bat
((venv) ) wizard23@Philipps-iMac MS3KOS


```
