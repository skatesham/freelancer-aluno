import { Injectable } from '@angular/core';
import { tags } from '../models/mock-tags';
import { Tag } from '../models/tag';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  urlbase: string = 'https://freelancer-aluno.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getTags() {
    let url = this.urlbase + "tags";
    return this.http.get(url);
  }

  getTagById(tagId: string) {
    let url = this.urlbase + "tag/" + tagId;
    return this.http.get(url);
  }

  getOrCreate(tagName: string) {
    let url = this.urlbase + "tags/" + tagName;
    return this.http.get(url);
  }

  // Mock
  getOrCreateTag(tagName: string) {
    tagName = tagName.trim();
    tagName = tagName.toLowerCase();
    let novaTag;
    tags.forEach(t => {
      if (t.nome === tagName) {
        novaTag = t;
      }
    });
    if (novaTag == null) {
      novaTag = new Tag(tagName);
      tags.push(novaTag);
    }
    return novaTag;
  }
}
