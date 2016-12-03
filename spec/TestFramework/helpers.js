export const removeWhiteSpace = (string) => {
  return string.replace(/  /g,'').replace(/(^[ \t]*\n)/gm, "").replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"");
};
