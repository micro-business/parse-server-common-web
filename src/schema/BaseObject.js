// @flow

import Parse from 'parse';

export default class BaseObject extends Parse.Object {
  constructor(object, className) {
    super(className);

    this.object = object;
  }

  getObject = () => this.object || this;

  saveObject = sessionToken => this.getObject().save(null, { sessionToken });

  getId = () => this.getObject().id;
}
