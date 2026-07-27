# Engineer Bo Full Scroll Dial — Mini Manual

## What it is
A custom USB high-resolution scroll dial. It presents itself to Linux as a
**mouse/pointer** with a hi-res scroll wheel and 5 mouse buttons. The `feed:beef`
USB ID is a placeholder typical of DIY/QMK-style firmware, so the OS treats it as
a generic HID mouse — no driver needed.

## Controls
| Control | What it does |
|---|---|
| **Dial** | Scrolls. One direction = wheel up, the other = wheel down. It's *high-resolution*, so it scrolls smoothly, not just in fixed clicks. |
| **Back switch** | **Mode toggle — this is the important one.** One position enables scrolling; the other leaves the dial silent (sends nothing). ⚠️ If the dial ever "stops working," check this switch *first*. |
| **Back button** | Did not emit a standard mouse-button event in testing — likely unused, or tied to a firmware function. Re-test anytime with the watch command below. |

## ⚡ If it stops scrolling — quick checklist
1. **Flip the back switch.** Most likely cause; costs two seconds.
2. **Unplug and replug.** This re-initializes the device cleanly (a fresh reconnect
   clears a stuck state).
3. Still nothing? Watch its live events (next section) to see whether the hardware
   is talking at all.

## Diagnostic commands (X11 / Cinnamon)
The device's numeric ID **changes when you reconnect it**, so always look it up first:

```bash
# 1. Find its current ID
DISPLAY=:0 xinput list | grep -i "Engineer Bo"      # -> "id=NN"

# 2. Watch live events — spin the dial / press things, Ctrl+C to stop
DISPLAY=:0 xinput test NN
#   button press 4/5      = wheel up / down  -> scrolling works
#   motion a[3]=...       = smooth hi-res scroll axis
#   motion a[0]/a[1]      = it's moving the cursor instead (wrong mode)
#   nothing               = device is silent -> check the switch / replug

# 3. See its settings
DISPLAY=:0 xinput list-props NN
```

A healthy dial shows `motion a[3]` values plus `button press 4/5` as you turn —
that's the "it works" signature.

## Optional tweaks
Replace `NN` with the current ID from step 1 (these reset when you reconnect, so to
make them permanent you'd apply them on device-plug via a udev/session rule):

```bash
# Reverse scroll direction (natural scrolling) for just this dial
DISPLAY=:0 xinput set-prop NN "libinput Natural Scrolling Enabled" 1

# Confirm hi-res scrolling is on (should already be 1)
DISPLAY=:0 xinput set-prop NN "libinput High Resolution Wheel Scroll Enabled" 1
```

## Reference — how this system currently sees it
- **Name:** `Engineer Bo Full Scroll Dial`
- **USB ID:** `feed:beef`
- **Event node:** `/dev/input/event21` *(may change on reconnect)*
- **Scroll axis:** Valuator 3 (vertical), 120 units per notch, hi-res enabled
- **Buttons advertised:** left, right, middle, side, extra
