---
title: "Playing with LiDAR"
description: "Decribe this blog post."
date: 2025-12-31
tags:
    - AR
    - LiDAR
    - 3D Modeling
draft: false
---

Succesfully loaded `.glb` and `.gltf` models with [\<model-viewer>](https://modelviewer.dev/). Only load the model when clicked, reducing unwanted JavaScript execution.

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

---

## Modular App

### Culvert A

<is-land on:interaction>
<p>Click here to load the model!</p>

<template data-island>
<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
<model-viewer alt="A culvert." src="https://demos.emilyleanne.com/36-georgia-y.gltf" camera-controls auto-rotate touch-action="pan-y" camera-orbit="145deg 55deg 4m" shadow-intensity="1" style="height:600px;width:100%;border:1px solid orange;overflow-x: hidden;"></model-viewer>
</template>
</is-land>

#### Screenshot

![culvert A screenshot](./36-georgia.jpeg)

### Culvert B

<is-land on:interaction>
<p>Click here to load the model!</p>

<template data-island>
<model-viewer alt="A culvert." src="https://demos.emilyleanne.com/36-hampshire-y.gltf" camera-controls auto-rotate touch-action="pan-y" camera-orbit="145deg 55deg 4m" shadow-intensity="1" style="height:600px;width:100%;border:1px solid orange;overflow-x: hidden;"></model-viewer>
</template>
</is-land>

#### Screenshot

![culvert B screenshot](./36-hampshire.jpeg)
