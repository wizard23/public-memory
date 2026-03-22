## Setup
* In `Arduine IDE->File->Preferences...` open the `Additional Boards Manager URLs` dialog
* then add `https://github.com/stm32duino/BoardManagerFiles/raw/main/package_stmicroelectronics_index.json` to the `Additional Boards Manager URLs`
  * I found the link to the `json` file via https://github.com/arduino/Arduino/wiki/Unofficial-list-of-3rd-party-boards-support-urls which is linked in the `Additional Boards Manager URLs` dialog
* If you entered everything correctly and your internet connection works it should now download the description files for the nucleo boards.
* Then open the `Board Manager` dialog via `Tools->Board->Boards Manager...` and type `STM32` in the search dialog. Then install the `STM32 MCU based boards by STMicroelectronics` (aka STM32duino)
* 
