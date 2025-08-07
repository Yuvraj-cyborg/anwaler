# anti-crawler

[![npm version](https://img.shields.io/npm/v/anti-crawler.svg?style=flat-square)](https://www.npmjs.com/package/anti-crawler)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/yourusername/anti-crawler/ci.yml?branch=main&style=flat-square)](https://github.com/yourusername/anti-crawler/actions)
[![Downloads](https://img.shields.io/npm/dm/anti-crawler.svg?style=flat-square)](https://www.npmjs.com/package/anti-crawler)

---

## Overview

**anti-crawler** is a lightweight, dependency-free frontend library designed to detect and block headless browsers, automated crawlers, and bots. It helps protect your website by identifying suspicious browser behaviors and blocking unwanted traffic early on the client side.

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
npm install anti-crawler
