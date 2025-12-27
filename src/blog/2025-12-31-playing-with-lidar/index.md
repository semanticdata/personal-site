---
title: "Playing with LiDAR"
description: "Decribe this blog post."
date: 2025-12-31
tags:
    - LiDAR
draft: false
---

Succesfully loaded `.glb` models with [\<model-viewer>](https://modelviewer.dev/). Only load the model when clicked, reducing unwanted JS.

![single culvert](./snapshot-culvert-all.jpg)

## Single Culvert

<is-land on:interaction>
<p>Click here to load the model!</p>

<template data-island>
<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
<model-viewer alt="A culvert." src="/assets/5_2_2025.glb" camera-controls auto-rotate touch-action="pan-y" camera-orbit="145deg 55deg 4m" shadow-intensity="1" style="height:600px;width:100%;border:1px solid orange;overflow-x: hidden;"></model-viewer>
</template>
</is-land>

### Measurement

![single culvert measurement](./snapshot-culvert.jpg)

## Double Culvert

<is-land on:interaction>
<p>Click here to load the model!</p>

<template data-island>
<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
<model-viewer alt="A culvert." src="/assets/5_2_2025-double.glb" camera-controls auto-rotate touch-action="pan-y" camera-orbit="145deg 55deg 4m" shadow-intensity="1" style="height:600px;width:100%;border:1px solid orange;overflow-x: hidden;"></model-viewer>
</template>
</is-land>

### Measurement

![double culvert measurement](./snapshot-double-culvert.jpg)
