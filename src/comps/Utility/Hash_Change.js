export const handleHashChange = (hash, setState, options) => {
  const hashValue = decodeURIComponent(hash.slice(1)) || "";

  if (options.includes(hashValue)) {
    setState(hashValue);
  } else {
    setState("");
  }
};
