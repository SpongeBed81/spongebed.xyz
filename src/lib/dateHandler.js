export default function dateHandler(date, format) {
  date = date.replaceAll(".", "/").replaceAll("-", "/");
  if (format == "dd-mm-yyyy") {
    const spl = date.split("/");
    const day = spl[0];
    const month = spl[1];
    const year = spl[2];

    date = `${month}/${day}/${year}`;
  }

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });
}
