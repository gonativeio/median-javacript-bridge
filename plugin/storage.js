import localpreferences from "./localpreferences";

const storage = {
  app: localpreferences.nonpersistent,
  cloud: localpreferences.persistent,
  filesystem: localpreferences.filesystem,
};

export default storage;
