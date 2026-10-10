---
title: Libvirt configuration for working with ntfs-formatted partition storage pool
description: It isn't that hard using ntfs-formatted partition as storage pool
  for QEMU/KVM, here's how
date: 2026-10-10
category: tech
tags:
  - tutorial
slug: ntfs-storage-pool-libvirt-config
---
**Note that this will reduce security measure of KVM in exchange of functionality**

1. Change on /etc/libvirt/qemu.conf

```
# please note that you can`t use /var/lib/libvirt/images as your default pool if we apply this, but you still can use your home directory if you want, sometimes to put your virtual disk inside your linux partition
# use current username for qemu process user and groups
user = "alif"
group = "alif"
# disable svirt (secure virtualization) measure because ntfs did not support unix xattrs 
security_driver = "none"
# disable owner remember for vm file because ntfs did not support unix xattrs 
remember_owner = 0
# disable dynamic ownership for preventing libvirt to take ownership on vm file
dynamic_ownership = 0
```

2. ntfs partition driver and mount option

A. Change your ntfs driver on `/etc/fstab` or applications such like gnome disks or kpartition to `ntfs` for kernel 7.1+ or `ntfs3` for kernel 5.15+. this will increase disk i/o speed and reducing cpu overhead since this driver is working entirely in kernel-space instead of user-space with fuse like `ntfs-3g`

To prevent conflict with existing `ntfs-3g` if you were planning to use `ntfs` driver, unmount your existing ntfs partition, remove the `ntfs-3g` package from your system, and reboot. 

Then define the filesystem type on your `/etc/fstab` or disk management applications such like gnome disks or kpartition to `ntfs` for kernel 7.1+ or `ntfs3` for kernel 5.15+

Example on `/etc/fstab` :

```
/dev/disk/by-uuid/ABCDE /mnt/cdrive ntfs defaults,.... # for ntfs drivers
/dev/disk/by-uuid/DEFGH /mnt/ddrive ntfs3 defaults,.... # for ntfs3 drivers
```

We also need to change default udisks2 mount options because ntfs didn't understand linux permissions, ensuring smooth mount, unmount, read and write operations

Edit `/etc/udisks2/mount_options.conf` (need sudo)

```
[defaults]
ntfs_defaults=uid=$UID,gid=$GID
```

B. Change your existing mount settings on `/etc/fstab` or disk management applications such like gnome disks or kpartition to this one so libvirt can access it without getting blocked either by file permission or selinux

```
defaults,uid=1000,gid=1000,fmask=0000,dmask=0022,windows_names,noatime,context="system_u:object_r:virt_image_t:s0"
```

3. SELinux booleans

Change this 2 booleans involving libvirt and qemu processes

```
sudo setsebool -P virt_use_fusefs 1 # Allow virt to use fusefs
sudo setsebool -P domain_can_mmap_files # Allow domain to can mmap files
```

[This article is Licensed under CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode.txt)