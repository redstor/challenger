import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StyleManager {
  darkSet = false;
  curTheme = '';

  setStyle(style: string) {
    switch(style) {
      case "dark": {
        // set dark mode to be enabled
        const href= 'dark-theme.css';
        getLinkElementForKey('dark-theme').setAttribute('href', href);
        document.body.classList.add('dark-theme');
        this.darkSet = true;
        this.curTheme = 'dark-theme';
        break;
      }
      case "red": {
        // set red theme
        const href= 'red-theme.css';
        getLinkElementForKey('red-theme').setAttribute('href', href);
        document.body.classList.add('red-theme');
        this.darkSet = false;
        this.curTheme = 'red-theme';
        break;
      }
      default: {
        // clear all mentions of dark mode
        this.clearStyle('dark-theme');
        document.body.classList.remove('dark-theme');
        this.darkSet = false;
        this.curTheme = '';
        break;
      }
      
    }
  }

  // helper to clear styling. can be reused later for themeing
  clearStyle(key: string) {
    const existingLinkElement = getExistingLinkElement(key);
    if(existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

function getLinkElementForKey(key: string) {
  return getExistingLinkElement(key) || createLinkElement(key);
}

function getExistingLinkElement(key: string) {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getKeyClassName(key)}`
  )
}

function createLinkElement(key: string) {
  const linkElement = document.createElement('link');
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.classList.add(getKeyClassName(key));
  document.head.appendChild(linkElement);
  return linkElement;
}

function getKeyClassName(key: string) {
  return `style-manager-${key}`;
}