#!/usr/bin/env bash
# Map the touchscreen to the monitor it physically belongs to (X11 only).
#
# X11 maps a touchscreen to the whole virtual screen by default, so with
# multiple monitors touches land in the wrong place. `xinput map-to-output`
# sets the device's coordinate transformation matrix from the output's
# geometry, including rotation.
#
# Usage: setup-touch-monitor.sh [output]
#   output  xrandr output name the touchscreen belongs to (default: DisplayPort-4)
set -euo pipefail

TOUCH_DEVICE="Silicon Integrated System Co. SiS HID Touch Controller"
OUTPUT="${1:-DisplayPort-4}"

export DISPLAY="${DISPLAY:-:0}"

if ! xrandr --query | grep -q "^${OUTPUT} connected"; then
    echo "error: output '${OUTPUT}' is not connected (see xrandr --query)" >&2
    exit 1
fi

mapfile -t ids < <(xinput list --id-only "pointer:${TOUCH_DEVICE}" 2>/dev/null || true)
if [[ ${#ids[@]} -eq 0 ]]; then
    echo "error: touch device '${TOUCH_DEVICE}' not found (see xinput list)" >&2
    exit 1
fi

for id in "${ids[@]}"; do
    xinput map-to-output "$id" "$OUTPUT"
    echo "mapped '${TOUCH_DEVICE}' (id ${id}) -> ${OUTPUT}"
done
