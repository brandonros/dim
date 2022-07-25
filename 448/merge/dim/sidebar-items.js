initSidebarItems({"fn":[["setup_logging","Function builds a logger drain that drains to a json file located in logs/ and also to stdout."]],"macro":[["balanced_or_tree","Source: https://github.com/seanmonstar/warp/issues/619 Takes a list of handler expressions and `or`s them together in a balanced tree. That is, instead of `a.or(b).or(c).or(d)`, it produces `(a.or(b)).or(c.or(d))`, thus nesting the types less deeply, which provides improvements in compile time."],["json","Construct a `serde_json::Value` from a JSON literal."],["warp_try",""],["warp_unwrap",""]],"mod":[["core","Module contains our core initialization logic."],["errors","Module contains all the error definitions used in dim, and returned by the web-service."],["external","Module contains our external api interfaces"],["fetcher","Contains the code for fetching assets like posters and stills."],["logger","Contains our custom logger for rocket"],["routes","Contains all of the routes exposed by the webapi. This module contains all the routes supported by the API."],["scanners","Contains our media scanners and so on."],["stream_tracking","Contains the fairing which tracks streams across rest api"],["streaming","Contains all the logic needed for streaming and on-the-fly transcoding."],["tree","Tree-like structure for representing directories of files."],["utils","Various utilities"],["websocket","Websocket related logic."]]});