import { Injectable } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta, private router: Router) { }

  generateTags({ title = '', description = '', image = '' }) {

    this.title.setTitle(title);
    this.meta.addTags([
      { name: 'og:url', content: `https://angular-trello-clone.firebaseapp.com${this.router.url}` },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: image },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@IDontUseTwitter' },
    ]);

  }
}
