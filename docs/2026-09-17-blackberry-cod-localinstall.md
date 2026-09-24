---
title: How to install .cod apps on java-based BlackBerry OS locally without BlackBerry Device Manager
date: 2026-09-18
category: tech
tags: tutorial
slug: blackberry-cod-localinstall
---
## Overview
I recently find that java-based BlackBerry OS (before 10) can theoritically install .cod files without BlackBerry Desktop Manager with just .jad metadata and .cod application file, here's how

#### Java Application Descriptor (.jad) file structure used by BlackBerry
According to Wikipedia, [Java Application Descriptor](https://en.wikipedia.org/wiki/JAD_(file_format)) (JAD) files describe the MIDlets (Java ME applications) that are distributed as JAR files. But in Blackberry OS, instead of .jar files, this file is used for describing and distributing .cod files. This is an example of BlackBerry .jad files, Containing Opera Mini 8 information and distribution URLs

```
MIDlet-Version:  8.0
MIDlet-Description:  Opera Mini
MIDlet-Info-URL:  http://mini.opera.com/
MIDlet-Install-Notify:  http://mini.opera.com/n/35659Ahernskifers_en?vid=0x4b84319551881b16
MIDlet-Jar-Size:  510939
MIDlet-Jar-URL: http://m.opera.com/dl/xq9yTh*zOhMSc*5pBqsAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.jar?vid=0x4b84319551881b16
MIDlet-Name:  Opera Mini
MIDlet-Vendor:  Opera Software ASA
RIM-COD-SHA1-1:  82 d8 ee 95 7e 2e a4 e8 cb a1 3f 9a 73 be ba 15 24 5f fc 68
RIM-COD-Size-1: 50348
RIM-COD-URL-1: http://m.opera.com/dl/bqxsrDvtUmv5G6fFKOgAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-SHA1:  29 74 6b ae 2b 75 cf 99 62 dd 4f d9 fe cb 7d 08 7a 38 f8 1d
RIM-COD-SHA1-10:  16 4a f4 6d ef 71 ce 4b 34 78 f0 66 52 6a 1a e8 c4 cf a0 14
RIM-COD-SHA1-11:  84 59 28 a8 2e 23 6f 9e 29 5d 34 93 ce b1 b8 26 47 8d 7b 1f
RIM-COD-SHA1-2:  67 53 d7 53 26 5e 7f b7 80 1b 1d b9 55 3b 8d 69 cf 93 ad 93
RIM-COD-SHA1-3:  78 c5 c1 c9 26 74 ca 2d 05 7c 97 d7 1c 35 b2 70 1e a6 61 50
RIM-COD-SHA1-4:  d6 07 b8 9e b3 ed 58 00 01 d4 1c 4a 0f 24 00 04 41 6d 44 cc
RIM-COD-SHA1-5:  6d 5d 81 b8 f3 40 0e eb f5 0d 46 df f1 23 75 f7 03 10 16 90
RIM-COD-SHA1-6:  a4 b1 1a 33 a1 48 64 a4 55 b3 9b 28 ff 55 12 17 81 1d 28 76
RIM-COD-SHA1-7:  0b 50 e6 c6 d3 65 67 d8 5e 09 0d 4f d8 8a 8a 5f d4 2d 0c da
RIM-COD-SHA1-8:  c3 75 6d 93 ba 47 19 02 b3 c4 af 2f 81 3b 5a a0 70 59 3d fc
RIM-COD-SHA1-9:  23 2b dc b0 89 ae 33 18 90 77 38 f4 9a cf 11 c9 bf 74 43 ff
RIM-COD-Size: 69480
RIM-COD-Size-10: 50348
RIM-COD-Size-11: 70748
RIM-COD-Size-2: 56152
RIM-COD-Size-3: 54168
RIM-COD-Size-4: 105376
RIM-COD-Size-5: 59516
RIM-COD-Size-6: 58608
RIM-COD-Size-7: 59316
RIM-COD-Size-8: 54592
RIM-COD-Size-9: 50348
RIM-COD-URL: http://m.opera.com/dl/zYlbfclLkc0BR8icB-wAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-URL-10: http://m.opera.com/dl/**up4CdKl0jfmZtbojYAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-URL-11: http://m.opera.com/dl/iYIC*rj1bp5exoiKXYsAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-URL-2: http://m.opera.com/dl/WfhPbV-f41yWPpX-WzsAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-URL-3: http://m.opera.com/dl/odOI-M3-ghH7H6wuA6IAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-URL-4: http://m.opera.com/dl/ghycxx3-XP4O*nsQ0y4Aep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-URL-5: http://m.opera.com/dl/slY67j0q3VADqLfStOEAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-URL-6: http://m.opera.com/dl/A*Kx8t2ABr1br-ZSUjAAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-URL-7: http://m.opera.com/dl/6UTAOjDYeLlmfZ7F9wkAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-URL-8: http://m.opera.com/dl/qHHRLePWXT3c-9g61tQAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
RIM-COD-URL-9: http://m.opera.com/dl/4XJXRzyN2aL9mYdLNZcAep1LDw8CZGVmYXVsdF8yMDEyLnBuZw==/mini.cod?vid=0x4b84319551881b16
MicroEdition-Configuration:  CLDC-1.0
MicroEdition-Profile:  MIDP-2.0
OM-Install-Referrer: |vid=0x4b84319551881b16
OM-UA: Opera/9.80 (S60; SymbOS; Opera Mobi/SYB-1107071606; U; en) Presto/2.8.149 Version/11.10
OM-Upgrade: u=A2Nn4v0ndf3DwowkXkCiyaev8Uq4qlE=
```

#### Common Structure

MIDlet-Name = Opera Mini
Identifies the application name shown to the user.

MIDlet-Version = 8.0
Indicates the application version.

MIDlet-Vendor = Opera Software ASA
Specifies the software publisher.

MIDlet-Description = Opera Mini
Short description of the MIDlet.

MIDlet-Jar-URL
URL used to download the MIDlet JAR file.

MIDlet-Jar-Size
Size of the JAR file in bytes.

MIDlet-Info-URL
Website providing information about the MIDlet.

MIDlet-Install-Notify
URL notified after successful installation.

MicroEdition-Configuration = CLDC-1.0
Specifies the Java ME configuration required.

MicroEdition-Profile = MIDP-2.0
Specifies the Java ME profile required.

#### BlackBerry (RIM) Specific Metadata

RIM-COD-URL / RIM-COD-URL-n
URLs for downloading individual COD modules.

RIM-COD-Size / RIM-COD-Size-n
Size of each COD module.

RIM-COD-SHA1 / RIM-COD-SHA1-n
SHA-1 hash used to verify integrity of each COD module.

#### Opera Mobile / Mini Internal Metadata

OM-UA
User-Agent string used by Opera Mini.

OM-Upgrade
Internal reference for upgrade handling.

OM-Install-Referrer
Tracks the installation source or referral

#### And this is the point: we use file:/// pointer as `RIM-COD-URL` allowing local .cod file, either at Internal Storage or SD Card to be installed locally without BlackBerry Desktop Manager

We only need this value filled to be a valid .jad file, example:

```
MIDlet-Name: Opera Mini 4
MIDlet-Vendor: Opera Software ASA
MIDlet-Version: 4.5
RIM-COD-Size: 222424
RIM-COD-URL: file:///store/home/user/opera-mini-4.5.33868-advanced-en-fw4.2/operette-hifi-en-jsr75.cod
```

Or if .cod file is from sdcard

```
MIDlet-Name: Opera Mini 4
MIDlet-Vendor: Opera Software ASA
MIDlet-Version: 4.5
RIM-COD-Size: 222424
RIM-COD-URL: file:///SDCard/opera-mini-4.5.33868-advanced-en-fw4.2/operette-hifi-en-jsr75.cod
```

RIM-COD-Size isn't necessarily accurate, but required in a valid value, not random numbers, so if you have .cod sized more than this, using this example wouldn't be break your apps, just replace RIM-COD-URL with your own file location

[Licensed under CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode.txt)