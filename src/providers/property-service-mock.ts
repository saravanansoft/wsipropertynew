import {Injectable} from '@angular/core';
import properties from './mock-properties';
import propertyShowing from './mock-property-showing';

@Injectable()
export class PropertyService {

  findAll() {
    return Promise.resolve(properties);
  }

  findById(propertyId) {
    return Promise.resolve(propertyShowing.filter((property: any) =>
    (property.propertyId == propertyId)));
  }

  findPropertyShowings() {
    return Promise.resolve(propertyShowing);
  }


  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(properties.filter((property: any) =>
        (property.propertyName +  ' ' +property.city +  ' ' + property.state).toUpperCase().indexOf(key) > -1));
  }
}
