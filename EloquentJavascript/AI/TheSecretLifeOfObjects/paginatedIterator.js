class PaginatedFetcher {
  constructor(pages) {
    this.pages = pages;
  }

  [Symbol.iterator]() {
    let pageIndex = 0;
    let elementIndex = 0;

    return {
      next: () => {
        if (this.pages.length === 0) {
          return { value: undefined, done: true };
        }

        if (elementIndex >= this.pages[pageIndex].length) {
          elementIndex = 0;
          pageIndex++;
        }

        while (
          this.pages[pageIndex] &&
          this.pages[pageIndex].length === 0 &&
          pageIndex < this.pages.length
        ) {
          elementIndex = 0;
          pageIndex++;
        }

        if (pageIndex >= this.pages.length) {
          return { value: undefined, done: true };
        }

        return { value: this.pages[pageIndex][elementIndex++], done: false };
      },
    };
  }
}

const data = [];

const fetcher = new PaginatedFetcher(data);

for (element of fetcher) {
  console.log(element);
}
