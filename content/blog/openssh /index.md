---
title: OpenSSH
date: "2020-05-01T22:12:03.284Z"
description: "Getting Started in OpenSSH"
---

### Linode.com

### What is "OpenSSH"

OpenSSH is remote management tool, that gives you access to run commands on another machine.

Its useful in Linux Environment

Remote acces in Linux community
Important component is client and server.

We have the internet and we can configure remotely.

OPEN SSH in default it uses port 22

How far we are reaching the destination,

How to connect and how it works and openssh keys

# connecting to remote server via SSH

SSH Client Installed Locally to other server

\$ which ssh
/usr/bin

Its package installed in default

apt search openssh-Client

we need the remote ip addresss

\$ ssh root@ipaddress

HostKey

Connected to the Remote Server.

ls /home/user -a
-a = show all file
cd .ssh
cd known_hosts
rm known_hosts

I removed Known Remote Server

ls -l

date
cat known_hosts

tmux

cd /var/log
//Following the auth log
tail -f auth.log
Toubleshooting

## Configuring the OpenSSH Client.

cd .ssh

touch config

nano config

Host myserver
Hostname ipaddress
Port 22
User root

ssh myserver

nanoconfig

### Using Public/private keys

OpenSSH is secured its better we use key to connect

Disable Password authentication.

cd ..ssh

create an ssh key and add it to remote server.

create keys
ssh-keygen

where to save file - id_rsa - rsa is type

use passphrase

id_rsa.pub - Public Key

cat id_rsa.pub

Add the public key on the server

cat id_rsa - Private Key

How to setup the server.

cat id_rsa.pub

Connect to the remote server

cd ..ssh
//create mkdir ..ssh
nano authorised_keys
paste the public key

logout

ssh -v root@ipaddress

ls

rm id_rsa\*

ssh-keygen

cat id_rsa.pub

nano .ssh/authorized_keys



