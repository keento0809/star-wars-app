type SupportedDateFormat =
  | "YYYY/MM/DD"
  | "YYYY年M月D日(曜)"
  | "M/D(曜)"
  | "YYYY/MM/DD HH:mm:ss";

const locateDate = new Date().toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function formatDate(date: Date, format: SupportedDateFormat) {
  switch (format) {
    case "YYYY/MM/DD": {
      return;
    }
    case "YYYY年M月D日(曜)": {
      return;
    }
    case "M/D(曜)": {
      return;
    }
    case "YYYY/MM/DD HH:mm:ss": {
      return;
    }
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}
