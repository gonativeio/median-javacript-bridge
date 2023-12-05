import { CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type BackgroundMediaTrack = {
  url?: string;
  title?: string;
  album?: string;
  artist?: string;
  time?: number;
};

type BackgroundMediaStreamPlaylistParams = {
  currentTrackNumber: number;
  tracks: BackgroundMediaTrack[];
};

type BackgroundMediaPlayerStatusData = {
  currentTime: number;
  isPaused: boolean;
  album: string;
  artist: string;
  title: string;
  artwork: string;
  url: string;
};

const backgroundMedia = {
  playTrack: function (params: BackgroundMediaTrack | number) {
    if (typeof params === 'number') {
      params = { time: params };
    }
    addCommand('median://backgroundMedia/playTrack', params);
  },
  streamPlaylist: function (params: BackgroundMediaStreamPlaylistParams) {
    addCommand('median://backgroundMedia/streamPlaylist', params);
  },
  pause: function () {
    addCommand('median://backgroundMedia/pause');
  },
  stop: function () {
    addCommand('median://backgroundMedia/stop');
  },
  play: function () {
    addCommand('median://backgroundMedia/play');
  },
  resume: function () {
    addCommand('median://backgroundMedia/resume');
  },
  getPlayerStatus: function (params: CallbackParams<BackgroundMediaPlayerStatusData>) {
    return addCommandCallback<BackgroundMediaPlayerStatusData>('median://backgroundMedia/getPlayerStatus', params);
  },
};

export default backgroundMedia;
