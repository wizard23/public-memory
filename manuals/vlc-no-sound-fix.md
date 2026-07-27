# VLC — No Sound (while browsers/YouTube play fine)

## The symptom
VLC plays video but produces **no audio**, on many/all files — yet Chrome,
Firefox, and YouTube all play sound normally.

## The cause
It's **not** a broken file, codec, or muted VLC. The audio server
(PulseAudio/PipeWire) remembers, *per application*, which output device each app
last used — a feature called **stream-restore**. VLC had gotten pinned to the
**wrong output** (the GPU's HDMI audio / a monitor with no speakers) instead of
the real speakers. So VLC's sound was playing correctly — into a device you can't
hear. Firefox kept its own routing to the speakers, which is why browsers were
unaffected.

Key tell: VLC is hit even when other apps are fine, because the bad routing is
saved against VLC specifically.

### Why it can also affect mpv / Celluloid (and similar players)
There are really **two** things going on, and different apps trip over different ones:

- **The shared problem:** the wrong device is the *default/active output*. Any app
  that just follows the default — **mpv, and its front-end Celluloid** — plays into
  that wrong device with no per-app setting of its own.
- **VLC's extra twist:** VLC *also* remembers its own per-application output
  (stream-restore), so it can stay stuck on the wrong device even after the default
  is corrected — which is why VLC needs the explicit "pick the speaker" step.

So fixing the active/default output cures mpv/Celluloid **for free**, while VLC may
need one extra nudge because of its saved preference. If several players go silent
at once, suspect the **default output**; if it's *only* VLC, suspect its
**per-app** routing.

## The fix (any one — it sticks, because stream-restore remembers the new choice)

**Easiest — inside VLC:** while a video is playing,
**Audio -> Audio Device -> pick the real speakers** (e.g. "T2 Speaker" /
built-in output) instead of the HDMI one.

**GUI mixer:** install `pavucontrol`, open the **Playback** tab while VLC plays,
and change the device dropdown on VLC's row to the speakers.

**Terminal:** while VLC is playing, move its stream to the default sink:
```bash
# find VLC's stream id (look for "VLC media player")
pactl list sink-inputs | grep -iE 'Sink Input|application.name'

# move it to the current default output
pactl move-sink-input <ID> @DEFAULT_SINK@
```

## How to diagnose (confirm this is the cause)
```bash
# List outputs — note which is the real speaker vs HDMI
wpctl status            # or: pactl list sinks short

# While something plays in VLC, see where its audio is routed:
pactl list sink-inputs | grep -E 'Sink Input|application.name|Sink:|Mute'
```
If VLC's `Sink:` number is different from the speaker sink that Firefox uses,
that's the problem — VLC is on the wrong output.

## Notes
- VLC's own volume slider was fine (~75%); volume was never the issue.
- This can recur if the HDMI device re-appears and VLC re-pins to it. If it comes
  back, just re-select the speaker output in VLC once and it'll be remembered again.
