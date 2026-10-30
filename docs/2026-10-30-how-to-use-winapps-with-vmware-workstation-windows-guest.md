---
title: How to use WinApps with VMware Workstation Windows guest
description: If you prefer VMware Workstation for your Linux hypervisor for some
  reason, here it is
date: 2026-10-30
category: tech
tags:
  - tutorial
slug: winapps-with-vmware
---
![](/media/winapps-with-vmware/img1.png)

#### Windows Guest configuration

1. Create a new Windows VM (if not exists yet)
2. Add host-only network adapter
- Edit Virtual Machine Settings -> Hardware -> Add -> Network Adapter -> Network Adapter 2 -> Network Connection -> Select Host-only
3. Enable guest time-syncing with host
- Edit Virtual Machine Settings -> Options -> VMware Tools -> Check Synchronize guest time with host
4. Then boot the VM and install Windows 10+ on your VMware, you probably know how to do this
5. Use local account, since RDP need user account with password, use password for your local account
6. Install VMware Tools
7. Enable remote desktop on your Windows guest
- Settings -> System -> Remote desktop -> Enable Remote Desktop
8. Download and run this file on your Windows:
- https://github.com/winapps-org/winapps/blob/main/oem/RDPApps.reg
- https://github.com/winapps-org/winapps/blob/main/oem/NetProfileCleanup.ps1
9. Open Control Panel
10. Go to: `Control Panel\Network and Internet\Network Connections`
11. Select Ethernet 1 with `Unidentified Network` status
12. Go to Properties -> Internet Protocol Version 4 (TCP/IPv4)
13. Select `Use the following IP address` we're making this IP static, for Linux host VMware use subnet `172.16.137.0`, so we just fill IP address with `172.16.137.10`, `255.255.0.0` for subnet mask, and left empty for default gateway

#### Linux Host Configuration
1. Just for make sure, open Virtual Network Editor, check host-only virtual network named `vmnet1`, look for `Subnet IP`, if its configured to use `172.16.137.0` let it as is, if that `192.168.218.0` or other than `172.16.137.0`, replace that with `172.16.137.0`.
2. Install WinApps depedency, look [here](https://github.com/winapps-org/winapps#step-2-install-dependencies) 
3. 

