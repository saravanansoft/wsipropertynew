import {Injectable} from '@angular/core';
import properties from './mock-properties';
import propertyShowing from './mock-property-showing';

@Injectable()
export class PropertyService {
  sortedProperties: Array<any>;
  public properties:Array<any>;
  public PropertyName:any;
  public PostedDate:any;
  public sortByValue:any;

  findAll(sortByValue) {
    if(sortByValue == "PropertyName")
    {
    	this.properties = properties.sort(function (a, b) {
      var propertyNameA = a.propertyName.toLowerCase(), propertyNameB = b.propertyName.toLowerCase();
      if (propertyNameA < propertyNameB) //sort string ascending
          return -1 
      if (propertyNameA > propertyNameB)
          return 1
      return 0 //default return value (no sorting) //default return value (no sorting)
    });
  }
  else{
    this.properties = properties.sort(function (a, b) {
      var postedDateA = + new Date(a.postedDate), postedDateB = + new Date(b.postedDate)
      return postedDateB-postedDateA
    });
  }
    return Promise.resolve(this.properties);
  }

  findById(propertyId) {
    return Promise.resolve(propertyShowing.filter((property: any) =>
    (property.propertyId == propertyId)));
  }

  findPropertyShowings(sortByValue) {
    if(sortByValue == "PropertyName")
    {
    	this.properties = propertyShowing.sort(function (a, b) {
      var propertyNameA = a.propertyName.toLowerCase(), propertyNameB = b.propertyName.toLowerCase();
      if (propertyNameA < propertyNameB) //sort string ascending
          return -1 
      if (propertyNameA > propertyNameB)
          return 1
      return 0 //default return value (no sorting) //default return value (no sorting)
    });
  }
  else{
    this.properties = propertyShowing.sort(function (a, b) {
      var visitDateA = + new Date(a.visitDate), visitDateB = + new Date(b.visitDate)
      return visitDateB-visitDateA
    });
  }
    return Promise.resolve(this.properties);
  }


  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(properties.filter((property: any) =>
        (property.propertyName +  ' ' +property.city +  ' ' + property.state).toUpperCase().indexOf(key) > -1));
  }
}
