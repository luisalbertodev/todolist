export function getLocalStorage({ type: TYPE }) {
  try {
    const { localStorage } = window;
    const currentLocalJSON = localStorage?.getItem(TYPE);

    if (typeof currentLocalJSON !== "string") {
      return undefined;
    }

    const parseLocal = JSON.parse(currentLocalJSON);
    return parseLocal;
  } catch {
    return undefined;
  }
}

export function setLocalStorage({ type: TYPE, dataSource: DATA }) {
  const { localStorage } = window;
  localStorage?.setItem(TYPE, JSON.stringify(DATA));
}
