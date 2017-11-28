
### domain: IO

Input/Output operations for streams produced by DevTools.

#### IO.close()
- parameters
  - `handle` <StreamHandle> Handle of the stream to close

Close the stream, discard any temporary backing storage.

#### IO.read()
- parameters
  - `handle` <StreamHandle> Handle of the stream to read
  - `offset` <[integer]> Seek to the specified offset before reading (if not specificed, proceed with offset
following the last read)
  - `size` <[integer]> Maximum number of bytes to read (left upon the agent discretion if not specified)
- returns
  - `base64Encoded` <[boolean]> Set if the data is base64-encoded
  - `data` <[string]> Data that were read
  - `eof` <[boolean]> Set if the end-of-file condition occured while reading

Read a chunk of the stream

#### IO.resolveBlob()
- parameters
  - `objectId` <Runtime.RemoteObjectId> Object id of a Blob object wrapper
- returns
  - `uuid` <[string]> UUID of the specified Blob

Return UUID of Blob object specified by a remote object id.