export class CounterService {
  private counter: number = 0;
  private MAX_COUNT: number;

  constructor() { }

  setMaxCount(max: number) {
    this.MAX_COUNT = max - 1;
  }

  getCount() {
    return this.counter;
  }

  getMaxCount() {
    return this.MAX_COUNT;
  }

  increment() {
    this.counter < this.MAX_COUNT ? ++this.counter : this.counter ;
  }

  reset(num?: number) {
    this.counter = num || 0;
  }

}
