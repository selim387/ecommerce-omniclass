import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'jquery', src: "https://code.jquery.com/jquery-3.5.1.min.js" },
  { name: 'bootstrap', src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" },
  { name: 'owl.carousel', src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" },
  { name: 'tooltip', src: "https://cdnjs.cloudflare.com/ajax/libs/tether-tooltip/1.2.0/js/tooltip.min.js" },
  { name: 'nouislider', src: "https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.2/nouislider.min.js" },
  //{ name: 'main', src: '../../assets/templates/js/main.js' }
];  


declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class DynamicScriptLoaderService {

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
      if (!this.scripts[name].loaded) {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
            script.onreadystatechange = () => {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                }
            };
        } else {  //Others
            script.onload = () => {
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
            };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

}