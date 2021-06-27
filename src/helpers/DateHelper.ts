export class DateHelper {
  
  public static MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  
  public static calculateDaysBetween(from: Date, to: Date): number {
    const utcFrom = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
    const utcTo = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());

    return Math.floor((utcTo - utcFrom) / DateHelper.MILLISECONDS_PER_DAY);
  }
}