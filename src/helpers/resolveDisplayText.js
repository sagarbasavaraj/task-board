const resolveDisplayText = (t, msg, text) => {
  if (text) {
    return text;
  }
  if (t && typeof t === 'function' && msg) {
    return t(msg);
  }
  return null;
};

export { resolveDisplayText };
