import { v4 as uniqueKey } from 'uuid';

class Observer {
  imageSubscriptions = new Map();
  searchPlateSubscriptions = new Map();

  subscribeImagesUpdate(callback) {
    const uniqueId = uniqueKey();
    this.imageSubscriptions.set(uniqueId, callback);

    return { unsubscribe: () => this.imageSubscriptions.delete(uniqueId) }
  }

  subscribeSearchPlate(callback) {
    const uniqueId = uniqueKey();
    this.searchPlateSubscriptions.set(uniqueId, callback);

    return { unsubscribe: () => this.searchPlateSubscriptions.delete(uniqueId) }
  }

  emitImagesUpdate() {
    for (const subscriberCallback of this.imageSubscriptions.values()) {
      subscriberCallback();
    }
  }

  emitSearchPlate(value) {
    for (const subscriberCallback of this.searchPlateSubscriptions.values()) {
      subscriberCallback(value);
    }
  }
}

export const ObserverService = new Observer();
