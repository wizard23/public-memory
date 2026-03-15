## Q: is there a dmg file for my v15 osx? for imhex...the one from the main page does only work with newer osx

## A: No...just build it yourselfg (easy if you allready have brew (homebrew...the free sw with the funny beer craft naming scheme ;) (adapted from chatgpt chat)

Short answer: No official DMG for macOS 10.15 from the current releases. The recent builds only run on much newer macOS versions, so Catalina (10.15) fails to start them.

Why this happens: The ImHex project explains that their official macOS binaries are built for very new macOS versions, and older systems won’t run them. They explicitly state that release binaries will not work on older macOS, and if you need them you must compile the program yourself.

Also, the Homebrew package currently requires macOS ≥13, which is far newer than Catalina.


### Build ImHex yourself (best option)

If you compile it locally on macOS 10.15 it will usually work.

Typical steps:

```
brew install cmake llvm glfw freetype capstone python
git clone https://github.com/WerWolv/ImHex.git
cd ImHex
mkdir build
cd build
cmake ..
make -j8
```


```
wizard23@Philipps-iMac ~ % 
wizard23@Philipps-iMac ~ % 
wizard23@Philipps-iMac ~ % ls
Applications	Desktop		Documents	Downloads	Library		Movies		Music		Pictures	Public		projects
wizard23@Philipps-iMac ~ % cd projects 
wizard23@Philipps-iMac projects % ls
EvoCellSpace	asimov		bateson		kicad		ms4k
wizard23@Philipps-iMac projects % mkdir build-imhex
wizard23@Philipps-iMac projects % cd build-imhex 
wizard23@Philipps-iMac build-imhex % brew install cmake llvm glfw freetype capstone python
git clone https://github.com/WerWolv/ImHex.git
cd ImHex
mkdir build
cd build
cmake ..
make -j8
==> Auto-updating Homebrew...
Adjust how often this is run with `$HOMEBREW_AUTO_UPDATE_SECS` or disable with
`$HOMEBREW_NO_AUTO_UPDATE=1`. Hide these hints with `$HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
==> Downloading https://ghcr.io/v2/homebrew/core/portable-ruby/blobs/sha256:e4f27cef5f72bf7a99c748c0650fe3718fe661a56960dedaeec9c2c98de1d3bc
######################################################################################################################################################################################################################################################### 100.0%
==> Pouring portable-ruby-4.0.1.catalina.bottle.tar.gz
==> Homebrew collects anonymous analytics.
Read the analytics documentation (and how to opt-out) here:
  https://docs.brew.sh/Analytics
No analytics have been recorded yet (nor will be during this `brew` run).

==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
  https://github.com/Homebrew/brew#donations

==> Auto-updated Homebrew!
Updated 2 taps (homebrew/core and homebrew/cask).
==> New Formulae
aoe: Terminal session manager for AI coding agents
apache-serf: High-performance asynchronous HTTP client library
apkeep: Command-line tool for downloading APK files from various sources
asc: Fast, lightweight CLI for App Store Connect
async-profiler: Sampling CPU & HEAP profiler for Java using AsyncGetCallTrace + perf_events
atuin-server: Sync server for atuin - Improved shell history for zsh, bash, fish and nushell
betterleaks: Secrets scanner built for configurability and speed
bitwuzla: SMT solver for bit-vectors, floating-points, arrays and uninterpreted functions
buildkitd: Concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit (Daemon)
checkpwn: Check Have I Been Pwned and see if it's time for you to change passwords
claude-agent-acp: Use Claude Code from any ACP client such as Zed!
clock-rs: Modern, digital clock that effortlessly runs in your terminal
cloudflare-speed-cli: Cloudflare-based speed test with optional TUI
cni-plugins: Container Network Interface plugins
containerd: Open and reliable container runtime
cwalk: Cross-platform path library for C/C++
datadog-static-analyzer: Static analysis tool for code quality and security
difi: Pixel-perfect terminal diff viewer
dlpack: Common in-memory tensor structure
docker-engine: Pack, ship and run any application as a lightweight container (Daemon)
ffc.h: Single-header C99 accelerated float/double parsing
flowrs: TUI application for Apache Airflow
fracturedjson: JSON formatter that produces highly readable but fairly compact output
garden: Grow and cultivate collections of Git trees
git-flow-next: Modern implementation of the Git-flow branching model
git-pkgs: Track package dependencies across git history
gittype: CLI code-typing game that turns your source code into typing challenges
googleworkspace-cli: CLI for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more
grafanactl: CLI to interact with Grafana
ipapatch: CLI tool to patch iOS IPA files and their plugins
ironclaw: Security-first personal AI assistant with WASM sandbox channels
kaf: Modern CLI for Apache Kafka
kubectl-tree: Kubectl plugin to browse Kubernetes object hierarchies as a tree
landrun: Lightweight, secure sandbox for running Linux processes using Landlock LSM
letta-code: Memory-first coding agent
likec4: Architecture modeling tool with live diagrams from code
linux-headers@6.8: Header files of the Linux kernel
lld@21: LLVM Project Linker
llmfit: Find what models run on your hardware
llvm@21: Next-gen compiler infrastructure
lua@5.4: Powerful, lightweight programming language
micasa: TUI for tracking home projects, maintenance schedules, appliances and quotes
mkbrr: Is a tool to create, modify and inspect torrent files. Fast
models: Fast TUI and CLI for browsing AI models, benchmarks, and coding agents
mp4ff: Tools for parsing and manipulating MP4/ISOBMFF files
nfd2nfc: Convert filesystem entry names from NFD to NFC for cross-platform compatibility
nomad-pack: Templating and packaging tool used with HashiCorp Nomad
nono: Capability-based sandbox shell for AI agents with OS-enforced isolation
nullclaw: Tiny autonomous AI assistant infrastructure written in Zig
nuls: NuShell-inspired ls with colorful table output
openspec: Spec-driven development (SDD) for AI coding assistants
pet: Simple command-line snippet manager
pi-coding-agent: AI agent toolkit
picoclaw: Ultra-efficient personal AI assistant in Go
powershell: Command-line shell and scripting language
protobuf@33: Protocol buffers (Google's data interchange format)
pyperformance: Python benchmark suite
rootlesskit: Linux-native "fake root" for implementing rootless containers
rtk: CLI proxy to minimize LLM token consumption
runc: CLI tool for spawning and running containers according to the OCI specification
rustledger: Fast, pure Rust implementation of Beancount double-entry accounting
rustypaste: Minimal file upload/pastebin service
rustypaste-cli: CLI tool for rustypaste
scala-cli: Scala language runner and build tool
sem-cli: Semantic version control CLI with entity-level diffs and blame
shadcn: CLI for adding components to your project
skills: Open agent skills ecosystem
spicedb: Open Source, Google Zanzibar-inspired database
sss-cli: Shamir secret share command-line interface
structurizr: Software architecture models as code
termframe: Terminal output SVG screenshot tool
termusic: Music Player TUI written in Rust
topicctl: Declarative Kafka topic management
torf-cli: CLI tool for creating, reading and editing torrent files
tree-sitter-go: Go grammar for tree-sitter
tree-sitter-python: Python grammar for tree-sitter
tree-sitter-ruby: Ruby grammar for tree-sitter
tsshd: UDP SSH server for trzsz-ssh (tssh) with roaming support
upterm: Instant terminal sharing
vapoursynth-bestsource: Audio/video source and FFmpeg wrapper
vapoursynth-bm3d: BM3D denoising filter for VapourSynth
vapoursynth-descale: VapourSynth plugin to undo upscaling
vuls: Agentless Vulnerability Scanner for Linux/FreeBSD
weave: Entity-level semantic merge driver for Git using tree-sitter
whodb-cli: Database management CLI with TUI interface, MCP server support, AI, and more
x-cli: Command-line power tool for Twitter
zeptoclaw: Lightweight personal AI gateway with layered safety controls
zeroclaw: Rust-first autonomous agent runtime
zsign: Cross-platform codesigning tool for iOS apps
zvbi: Vertical Blanking Interval (VBI) decoding library
zxc: High-performance asymmetric lossless compression library
zxing-cpp: Multi-format barcode image processing library written in C++

You have 5 outdated formulae installed.

Warning: cmake 4.2.3 is already installed and up-to-date.
To reinstall 4.2.3, run:
  brew reinstall cmake
llvm  is already installed but outdated (so it will be upgraded).
Warning: python@3.14 3.14.3_1 is already installed and up-to-date.
To reinstall 3.14.3_1, run:
  brew reinstall python@3.14
Warning: You are using macOS 13.
We (and Apple) do not provide support for this old version.
You may have better luck with MacPorts which supports older versions of macOS:
  https://www.macports.org

This is a Tier 3 configuration:
  https://docs.brew.sh/Support-Tiers#tier-3
You can report issues with Tier 3 configurations to Homebrew/* repositories!
Read the above document before opening any issues or PRs.

==> Fetching downloads for: llvm, glfw, freetype and capstone
✔︎ API Source llvm.rb                                                                                                                                                                                                                                                                                                                           Verified     34.3KB/ 34.3KB
✔︎ Bottle Manifest glfw (3.4)                                                                                                                                                                                                                                                                                                                   Downloaded   32.3KB/ 32.3KB
✔︎ API Source freetype.rb                                                                                                                                                                                                                                                                                                                       Verified      2.0KB/  2.0KB
✔︎ API Source capstone.rb                                                                                                                                                                                                                                                                                                                       Verified      2.4KB/  2.4KB
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/cf6c698f751ff436abd02499a0f1485b025d358f/Formula/s/sqlite.rb
Already downloaded: /Users/wizard23/Library/Caches/Homebrew/downloads/2fe2dd208e3cea94ee07c6d24b0ebfbf4812499533a4ddcbfe05f3fd421a27e4--sqlite.rb
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/cf6c698f751ff436abd02499a0f1485b025d358f/Formula/lib/libpng.rb
Already downloaded: /Users/wizard23/Library/Caches/Homebrew/downloads/2de09fae123f0def5fa29392780654b9663d98b6d230c881cbed940703d1535f--libpng.rb
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/cf6c698f751ff436abd02499a0f1485b025d358f/Formula/lib/libunistring.rb
Already downloaded: /Users/wizard23/Library/Caches/Homebrew/downloads/db54038dc9c21c67b34e83af561b2420a462e955e30ab6a31b032628e02e2a75--libunistring.rb
==> Downloading https://raw.githubusercontent.com/Homebrew/homebrew-core/cf6c698f751ff436abd02499a0f1485b025d358f/Formula/g/gettext.rb
Already downloaded: /Users/wizard23/Library/Caches/Homebrew/downloads/57675b581294a476386da72e480ea0e90995c59704b040e1fa7cc813303a3472--gettext.rb
✔︎ API Source sqlite.rb                                                                                                                                                                                                                                                                                                                         Verified      3.3KB/  3.3KB
✔︎ Formula sqlite (3.52.0)                                                                                                                                                                                                                                                                                                                      Verified      3.3MB/  3.3MB
✔︎ Patch 1381ad497b9a6d3da630cbef53cbfa9ddf117bb6...40a8c7c0ff3f688b690e4c74db734de67f0f89e9.diff                                                                                                                                                                                                                                               Verified      4.5KB/  4.5KB
✔︎ Bottle glfw (3.4)                                                                                                                                                                                                                                                                                                                            Downloaded  214.7KB/214.7KB
✔︎ API Source libpng.rb                                                                                                                                                                                                                                                                                                                         Verified      2.6KB/  2.6KB
✔︎ Formula libpng (1.6.55)                                                                                                                                                                                                                                                                                                                      Verified      1.1MB/  1.1MB
✔︎ Formula freetype (2.14.2)                                                                                                                                                                                                                                                                                                                    Verified      2.7MB/  2.7MB
✔︎ API Source libunistring.rb                                                                                                                                                                                                                                                                                                                   Verified      2.4KB/  2.4KB
✔︎ Formula libunistring (1.4.2)                                                                                                                                                                                                                                                                                                                 Verified      5.0MB/  5.0MB
✔︎ API Source gettext.rb                                                                                                                                                                                                                                                                                                                        Verified      2.7KB/  2.7KB
✔︎ Formula capstone (5.0.7)                                                                                                                                                                                                                                                                                                                     Verified      7.7MB/  7.7MB
✔︎ Formula gettext (1.0)                                                                                                                                                                                                                                                                                                                        Verified     32.7MB/ 32.7MB
✔︎ Formula llvm (22.1.1)                                                                                                                                                                                                                                                                                                                        Verified    167.0MB/167.0MB
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

==> Installing llvm dependency: sqlite
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

==> ./configure --enable-readline --disable-editline --enable-session --with-readline-cflags=-I/usr/local/opt/readline/include --with-readline-ldflags=-L/usr/local/opt/readline/lib -lreadline
==> make install
🍺  /usr/local/Cellar/sqlite/3.52.0: 13 files, 5.3MB, built in 33 seconds
==> Patching
==> Applying 1381ad497b9a6d3da630cbef53cbfa9ddf117bb6...40a8c7c0ff3f688b690e4c74db734de67f0f89e9.diff
==> cmake -G Ninja .. -DLLVM_ENABLE_PROJECTS=clang;clang-tools-extra;mlir;polly;lldb -DLLVM_ENABLE_RUNTIMES=compiler-rt;libcxx;libcxxabi;libunwind;openmp -DLLVM_POLLY_LINK_INTO_TOOLS=ON -DLLVM_BUILD_EXTERNAL_COMPILER_RT=ON -DLLVM_LINK_LLVM_DYLIB=ON -DLLVM_ENABLE_EH=OFF -DLLVM_ENABLE_FFI=ON -DLLVM_ENABLE_RTTI=ON -DLLVM_INCLUDE_DOCS=OFF -DLLVM_INCLUDE_TESTS=OFF 
==> cmake --build .




```
