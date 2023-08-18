export const slugFromPath = (path) => {
  const lastIndexSlash = path.lastIndexOf("/");
  path = path.slice(lastIndexSlash + 1);
  const lastIndexDot = path.lastIndexOf(".");
  path = path.substring(0, lastIndexDot);
  return path;
};
