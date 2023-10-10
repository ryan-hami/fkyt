const re = /^https\:\/\/youtu\.be\/.+\?si=.+$/;
addEventListener("copy", () => {
  const maybe = document.getElementById("share-url");
  if (maybe && re.test(maybe.value)) {
    maybe.value = maybe.value.substring(0, maybe.value.indexOf("?"));
    navigator.clipboard.writeText(maybe.value);
  }
});