---
title: Webrtc
date: "2020-05-01T22:12:03.284Z"
description: "Getting Started - WEBRTC"
---

#webrtc

### Is a framework that enables real time communication on web, browser, and mobile application.

> webrtc stands for WEB REAL TIME COMMUNICATION.

### WEBRTC Steps:

- Signalling
- Connecting
- Securing
- Communicating

> Communication using WEBRTC is most of the time Peer to Peer.

WEBRTC uses some many technologies.

> HTML,CSS, Javascript, NodeJS, Computer Network.

## Why WebRTC ?

Communication before webrtc, server does all the job. server as to do all the job. server way of doing is not scalable.

How do we make peer to peer ? Its also bring privacy. We can elimminate server cost.

Technology - SERVER

TEXT, Files, Video and Audio

### How WEBRTC works ?

We need to establish peer to peer connection.

Ech router as public IP. IP address

what is my IP Address is ?

when two people wants to communicate they need to know each other PUBLIC ip address.

## SIGNALLING SERVERLESS

It use to exchange ip address and connection between two people. Type of the call also passed by signalling server, it triggers the whole webrtc process.

Each device as own private Ip address.

STUN Server - It tells and finds your device public ip addresss

TURN SERVER - Incase if it is not connecting via peer to peer. there TURN SERVER works. TURN server is backup server. TURN SERVER works as traditional server.

### Websockets

Technology called websockets, websocket can also used to implement signalling server.

Normal Communication

###websocket
Client request and Server Reponse, but in case of chat we need instance communication, basically there is a link between them is bidrectional, this link is websocket. Basically establishing bidirectional commuinication with other entity, it can server or peer.

```
//Setting up Web environment


```

## webrtc Protocol

WEBRTC STEPS:

## Signaling Protocol

### SDP : Session Description Protocol

## Connecting Protocol

### ICE : Interactive Connectivity Establishment

## Security Protocol

### DTLS : Datagram Transport Layer Security

### SRTP : Secure Real-Time Transport Protocol

## Communication protocols

### RTP: Real-Time Transport Protocol

### SCTP: Stream Control Transmission Protocol

### RTCP : Real-time Transport Control Protocol

# SDP : Session Description Protocols

key = Value Every

# ICE : Interactive Connectivity Establishment

TURN Server

ICE server attempts to connect the two peer.

RTP: Real time Protocol
RTCP : It listens, whenever someone is listening, it will check the silence, dont waster the bandwidth, there is no information to send, it use to measure the bandwidth and the packet strength. Transfer of Audio Stream

RTP containes the packet and RTCP contains the statiscial information.

## SCTP

Stream Control Transmittion Protocol

Why we use SCTP,

1. Real-time network Games.
2. Text Chat
3. Asset Message

DTLS and SRTP

Security Protocols

Video Call are transmitted, You dont want to any hacker, how do we secure, w

Datagram Transport Layer Security

we create the certificate. its is encrypted and is secured.

There are encyrption

NAT TRAVERSAL

Network Address Translate.

Each device had their own IP Address. we dont need an unique address, we had IPV4 2:16, Router as 1 public address, this will connect to the communicate outside world. then we had IPV6 2:32

How the Internet works. You are searching something in Search Server.

How does the Router handles

ROUTER creates NAT table

ping google.com

Nat tables does the mapping.

## Protocols in Action


