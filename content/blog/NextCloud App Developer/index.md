---
title: NEXT CLOUD APP DEVELOPMENT
date: "2020-05-01T22:12:03.284Z"
description: "NextCloud App Development"
---

Initial HTML+JS+CSS

1. Basic view:

```mermaid
sequenceDiagram
   participant client
   participant NextCloud: GET .../apps/testapp
   NextCloud-->Client: html, js, css
```

2. Advanced View: App Framework

```mermaid
sequenceDiagram
participant Client
participant NextCloudENV
Client-->NextCloudENV: GET .../apps/testapp
```
