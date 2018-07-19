/**
 * Created by 林原 
 */
import { Base } from '../../utils/base.js';

class Service extends Base {
  constructor() {
    super();
  }

  /*服务*/
  getServiceData(id, callback) {
    var param = {
      url: 'service/' + id,
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Service };