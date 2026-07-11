### replace the swapfile with a bigger one (simplest):
```
sudo swapoff /swapfile                      # frees the swap — needs ~2G of RAM headroom, which you have
sudo fallocate -l 16G /swapfile             # or: sudo dd if=/dev/zero of=/swapfile bs=1M count=16384 status=progress
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```
