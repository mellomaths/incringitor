import { OnStartupEvent } from '../events/OnStartup.event';
import { EventsSettings } from './EventsSettings';

export class EventLoader {

  static load(): EventsSettings {
    const events: EventsSettings = {
      onStartup: new OnStartupEvent()
    };

    return events;
  }

}