```
wizard@imac-battleship:~/projects/MS/MS4000$ history
    1  cat Makefile
    2  id
    3  exit
    4  groups
    5  ls -a
    6  ls -hal
    7  ls -hal firmware/
    8  cat makefile
    9  cat Makefile 
   10  python
   11  python -v
   12  python3 -v
   13  python3 -V
   14  python3 -v
   15  which python
   16  which python3
   17  less Makefile 
   18  ls -hal
   19  git log
   20  history



(.venv_ms4000) wizard@imac-battleship:~/projects/MS/MS4000$ history
    1  cat Makefile
    2  id
    3  exit
    4  make python-reqs
    5  cd firmware/
    6  cd ..
    7  make python-tooling
    8  apt install python-pip
    9  apt install python-pip3
   10  apt install python3-pip
   11  make python-tooling
   12  vi Makefile 
   13  make python-tooling
   14  . .venv_ms4000/bin/activate ; make python-requirements
   15  cd firmware/
   16  make
   17  make python-reqs
   18  make proto
   19  cd ..
   20  rm -rf .venv_ms4000/
   21  rm -rf firmware/.pio/
   22  ls -alF
   23  make reqs-debian
   24  vi Makefile 
   25  make reqs-debian
   26  ls
   27  ls -alF
   28  vi Makefile 
   29  make reqs-debian
   30  make python-tooling
   31  . .venv_ms4000/bin/activate
   32  make python-requirements
   33  make proto
   34  cd firmware/
   35  make
   36  cd ../tools/nanopb/
   37  ls
   38  ls -a
   39  cd generator/
   40  ls -a
   41  which python
   42  python -V
   43  cd ../../../firmware/
   44  make proto
   45  cat requirements.txt 
   46  ls
   47  cat platformio.ini 
   48  ls ../tools/nanopb/
   49  cd ..
   50  vi Makefile 
   51  make tools
   52  cd firmware/
   53  make
   54  cat requirements.txt 
   55  git status
   56  git diff
   57  git add . 
   58  git commit -m "Python reqs less stringent, docker-buildx preferred"
   59  git push
   60  git pull
   61  git status
   62  git diff
   63  cd ..
   64  git diff
   65  git checkout -- Makefile
   66  git pull
   67  vi Makefile 
   68  make new-python-environment
   69  vi Makefile 
   70  make new-python-environment
   71  history
(.venv_ms4000) wizard@imac-battleship:~/projects/MS/MS4000$ 

```


```
(.venv_ms4000) wizard@imac-battleship:~/projects/MS/MS4000/firmware$ apt install protobuf-compiler
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  libprotobuf-dev libprotobuf-lite32t64 libprotobuf32t64 libprotoc32t64
Suggested packages:
  protobuf-mode-el
The following NEW packages will be installed:
  libprotobuf-dev libprotobuf-lite32t64 libprotoc32t64 protobuf-compiler
The following packages will be upgraded:
  libprotobuf32t64
1 upgraded, 4 newly installed, 0 to remove and 308 not upgraded.
Need to get 3.286 kB of archives.
After this operation, 15,6 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libprotobuf-lite32t64 amd64 3.21.12-8.2ubuntu0.3 [238 kB]
Get:2 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libprotobuf32t64 amd64 3.21.12-8.2ubuntu0.3 [923 kB]
Get:3 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libprotoc32t64 amd64 3.21.12-8.2ubuntu0.3 [683 kB]
Get:4 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 libprotobuf-dev amd64 3.21.12-8.2ubuntu0.3 [1.413 kB]
Get:5 http://archive.ubuntu.com/ubuntu noble-updates/universe amd64 protobuf-compiler amd64 3.21.12-8.2ubuntu0.3 [29,0 kB]
Fetched 3.286 kB in 1s (4.688 kB/s)          
Selecting previously unselected package libprotobuf-lite32t64:amd64.
(Reading database ... 516188 files and directories currently installed.)
Preparing to unpack .../libprotobuf-lite32t64_3.21.12-8.2ubuntu0.3_amd64.deb ...
Unpacking libprotobuf-lite32t64:amd64 (3.21.12-8.2ubuntu0.3) ...
Preparing to unpack .../libprotobuf32t64_3.21.12-8.2ubuntu0.3_amd64.deb ...
Unpacking libprotobuf32t64:amd64 (3.21.12-8.2ubuntu0.3) over (3.21.12-8.2ubuntu0.2) ...
Selecting previously unselected package libprotoc32t64:amd64.
Preparing to unpack .../libprotoc32t64_3.21.12-8.2ubuntu0.3_amd64.deb ...
Unpacking libprotoc32t64:amd64 (3.21.12-8.2ubuntu0.3) ...
Selecting previously unselected package libprotobuf-dev:amd64.
Preparing to unpack .../libprotobuf-dev_3.21.12-8.2ubuntu0.3_amd64.deb ...
Unpacking libprotobuf-dev:amd64 (3.21.12-8.2ubuntu0.3) ...
Selecting previously unselected package protobuf-compiler.
Preparing to unpack .../protobuf-compiler_3.21.12-8.2ubuntu0.3_amd64.deb ...
Unpacking protobuf-compiler (3.21.12-8.2ubuntu0.3) ...
Setting up libprotobuf-lite32t64:amd64 (3.21.12-8.2ubuntu0.3) ...
Setting up libprotobuf32t64:amd64 (3.21.12-8.2ubuntu0.3) ...
Setting up libprotobuf-dev:amd64 (3.21.12-8.2ubuntu0.3) ...
Setting up libprotoc32t64:amd64 (3.21.12-8.2ubuntu0.3) ...
Setting up protobuf-compiler (3.21.12-8.2ubuntu0.3) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.6) ...
(.venv_ms4000) wizard@imac-battleship:~/projects/MS/MS4000/firmware$ 
```


```
sudo usermod -a -G dialout wizard
newgrp dialout
```
