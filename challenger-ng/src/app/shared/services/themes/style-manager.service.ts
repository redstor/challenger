import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StyleManagerService {
  curTheme = 'light-theme';

  setStyle(style: string) {
    switch(style) {
      case "default": {
        // set default theme
        const href= 'light-theme.css';
        this.clearStyle(this.curTheme);
        getLinkElementForKey('light-theme').setAttribute('href', href);
        document.body.classList.add('light-theme');
        document.body.classList.remove(this.curTheme);
        this.curTheme = 'light-theme';
        break;
      }
      case "dark": {
        // set dark mode to be enabled
        const href= 'dark-theme.css';
        this.clearStyle(this.curTheme);
        getLinkElementForKey('dark-theme').setAttribute('href', href);
        document.body.classList.add('dark-theme');
        document.body.classList.remove(this.curTheme);
        this.curTheme = 'dark-theme';
        break;
      }
      case "red": {
        // set red theme
        const href= 'red-theme.css';
        this.clearStyle(this.curTheme);
        getLinkElementForKey('red-theme').setAttribute('href', href);
        document.body.classList.add('red-theme');
        document.body.classList.remove(this.curTheme);
        this.curTheme = 'red-theme';
        break;
      }
      default: {
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