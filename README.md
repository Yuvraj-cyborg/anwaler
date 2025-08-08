# Anwaler

[![npm version](https://img.shields.io/npm/v/anwaler.svg?style=flat-square)](https://www.npmjs.com/package/anwaler)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/Yuvraj-cyborg/anwaler/ci.yml?branch=main&style=flat-square)](https://github.com/Yuvraj-cyborg/anwaler/actions)
[![Downloads](https://img.shields.io/npm/dm/anwaler.svg?style=flat-square)](https://www.npmjs.com/package/anwaler)

---

## Overview

**Anwaler** is a lightweight, dependency-free frontend library designed to detect and block headless browsers, automated crawlers, and bots. It helps protect your website by identifying suspicious browser behaviors and blocking unwanted traffic early on the client side.

---

## Features

- Detects headless browsers and automation tools using standard and advanced properties
- Behavioral detection to verify genuine user interactions (mouse, keyboard, scroll)
- Honeytrap traps to catch bots interacting with invisible decoy elements
- Canvas and hardware fingerprinting for browser identification
- Blocks or warns suspected bots by modifying the DOM
- TypeScript support with full typings
- Compatible with all modern frontend frameworks and plain HTML environments

---

## Installation

Install via npm:

```bash
npm install anwaler
```

Install via bun:

```bash
bun add anwaler