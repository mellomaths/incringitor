export class DateHelper {
  
  public static MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  
  public static calculateDaysBetween(from: Date, to: Date): number {
    const utcFrom = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
    const utcTo = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());

    return Math.floor((utcTo - utcFrom) / DateHelper.MILLISECONDS_PER_DAY);
  }

  public static year() {
    return new Date().getFullYear();
  }

  public static isLeapYear(year: number) {
    return year % 4 === 0;
  }

  public static totalOfDaysInTheYear(year: number) {
    return this.isLeapYear(year) ? 366 : 365;
  }

  public static firstDayOfTheYear() {
    return new Date(`${this.year()}-01-01`);
  }

  public static daysSinceTheBeginningOfTheYear() {
    return this.calculateDaysBetween(this.firstDayOfTheYear(), new Date());
  }

  public static daysForTheEndOfTheYear() {
    const lastDayOfTheYear = new Date(`${this.year()}-12-31`);
    return this.calculateDaysBetween(new Date(), lastDayOfTheYear) + 1;
  }

  public static percentageOfTheYearPassed() {
    const today = new Date();
    const beginning = this.firstDayOfTheYear();
    const totalOfDays = this.totalOfDaysInTheYear(this.year());
    const daysToday = this.calculateDaysBetween(beginning, today);
    const percentage = (daysToday * 100) / totalOfDays;
    return percentage.toFixed(2);
  }

  public static daysSince(date: Date) {
    return this.calculateDaysBetween(date, new Date());
  }
}