import { Injectable } from '@angular/core';
import { ScriptStore } from './script.store';

@Injectable({
  providedIn: 'root',
})
export class ScriptService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({script: name, loaded: true, status: 'Already Loaded'});
      } else {
        // For universal rendering
        if (document) {
        // load script
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = this.scripts[name].src;
          // script.async = true;
          // script.defer = true;
          // if (script.readyState) {  // For IE (Not supported by Angular)
          //   script.onreadystatechange = () => {
          //     if (script.readyState === "loaded" || script.readyState === "complete") {
          //       script.onreadystatechange = null;
          //       this.scripts[name].loaded = true;
          //       resolve({script: name, loaded: true, status: 'Loaded'});
          //     }
          //   };
          // } else {  // Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
          script.onerror = (error: any) => reject({script: name, loaded: false, status: 'Loaded'});
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      }
    });
  }

}