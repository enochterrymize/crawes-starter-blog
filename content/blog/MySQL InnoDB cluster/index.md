---
title: MySQL InnoDB Cluster
date: "2020-05-06T23:46:37.121Z"
---

To achieve High Availability

## SETUP

mysql schell

> mysqlsh
> dba.deployLocalInstance(3350);
> dba.deployLocalInstance(3360);

Now Three instance is running

connect root@localhost:3310

var cluster = dba.createCluster('DevCluster');

Master Key

//add Two Instances

cluster.statuses
cluster.addInstance('root@localhost: 3320');

Group Replication

All the Nodes are online

Route the Applications
we use MYSQL router
sudo mysql --boostrap local:3350

mysqlrouter &
mysqlsh --uri root@localhost:6446 --sql

SELECT @@port

ps
kill -9 1121

## Cluster

Cluster - Multiple Node
Node - Instance (CPU, MEMORY, HDD)

Master and Slave
Program = In Every Node Program should be there.

Cluster Management Tool

Cloudera Manager

Managing the Single Node cluster

Kubernetes

Docker
