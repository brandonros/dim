window.SIDEBAR_ITEMS = {"fn":[["create_audio",""],["create_subtitles",""],["create_video",""],["get_chunk","Method mapped to `/api/v1/stream/<id>/data/<chunk..>` returns a chunk for stream `id`."],["get_init","Method mapped to `/api/v1/stream/<id>/data/init.mp4` returns the init chunk of the stream `id`."],["get_subtitle","Method mapped to `/api/v1/stream/<id>/data/stream.vtt` attempts to transcode the underlying stream to VTT."],["get_subtitle_ass","Method mapped to `/api/v1/stream/<id>/data/stream.ass` attempts to transcode the underlying stream to ASS."],["kill_session","Method mapped to `/api/v1/stream/<gid>/state/kill` will kill all streams for `gid`."],["return_manifest","Method mapped to `/api/v1/stream/<gid>/manifest.mpd` compiles a virtual manifest into a mpeg-dash manifest."],["return_virtual_manifest","Method mapped to `GET /api/v1/stream/<id>/manifest?<gid>` returns or creates a virtual manifest."],["session_get_stderr","Method mapped to `/api/v1/stream/<gid>/state/get_stderr` attempts to fetch and return the stderr logs of all ffmpeg streams for `gid`."],["should_client_hard_seek","Method mapped to `/api/v1/stream/<gid>/state/should_hard_seek/<chunk_num>` returns whether the client should hard seek in order to play the video at `chunk_num`. This is really only useful on web platforms."],["try_create_dstream",""]],"mod":[["filters",""]]};