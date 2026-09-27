---
title: How to fix linux can't boot on ASUS ExpertBook B1402CBA
date: 2026-09-27
category: tech
tags:
  - tutorial
slug: fix-linux-boot-asus-expertbook-b1402cba
---
If you want ot boot any linux distros that use newer kernel (maybe 6.12+, or non-lts kernel) and your uefi firmware version is 314+ you may occur this bug. after grub is loaded and you choose linux boot selection, either from existing installation or from live session, it only throw endless blackscreen without any logs, meaning you can't use shift or esc to see logs, and nomodeset didn't works too.

The problem is, on firmware v314+, Intel [IBT]([https://en.wikipedia.org/wiki/Indirect_branch_tracking](https://en.wikipedia.org/wiki/Indirect_branch_tracking)) is interfering with linux boot capabilities making boot process failed very early, even failed to write a logs, i guess this bug isn't nicely documented so i personally didn't know what happening under-the-hood

We must disable Intel [IBT]([https://en.wikipedia.org/wiki/Indirect_branch_tracking](https://en.wikipedia.org/wiki/Indirect_branch_tracking)) for linux boot, here's how to do it:  

**On Boot**

1. Press `e` on GRUB boot selection
2. Add kernel parameter `ibt=off` on `linux... quiet` line like this:

![](/media/fix-linux-boot-asus-expertbook-b1402cba/202609270001.png)

3. Then press `Ctrl+X` or `F10` to boot with newly specified kernel parameter

**On /etc/default/grub**

1. Edit `/etc/default/grub` with this command:

```bash
sudo nano /etc/default/grub
```

2. Then add `ibt=off` to `GRUB_CMDLINE_LINUX` section like this

![](/media/fix-linux-boot-asus-expertbook-b1402cba/202609270002.png)

3. Update GRUB configuration with this command

```bash
# Ubuntu/Debian based

sudo update-grub

# Fedora, RHEL-based, OpenSUSE

sudo grub2-mkconfig -o /boot/grub2/grub.cfg

# Arch-based

sudo grub-mkconfig -o /boot/grub2/grub.cfg
```

This should solve the problem of black screen when booting linux distros