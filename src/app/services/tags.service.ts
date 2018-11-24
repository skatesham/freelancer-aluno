import { Injectable } from '@angular/core';
import { tags } from '../models/mock-tags';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }

  getTags(): Tag[]{
    return tags;
  }

  getOrCreateTag(tagName: string){
    tagName = tagName.trim();
    tagName = tagName.toLowerCase();
    tags.forEach(t => {
      if(t.nome === tagName){
        return t;
      }
    });
    let novaTag = new Tag(tagName);
    tags.push(novaTag);
    return novaTag;
  }
}
