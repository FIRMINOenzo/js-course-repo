class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribre(fn) {
    this.observers.push(fn);
    console.log(`You're now subcribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });

    console.log(`You're now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach((item) => {
      item.call();
    });
  }
}

const click = new EventObserver();

const getCurrentMilliseconds = () => {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrentSeconds = () => {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};

document.querySelector(".sub-ms").addEventListener("click", () => {
  click.subscribre(getCurrentMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", () => {
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", () => {
  click.subscribre(getCurrentSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", () => {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector(".fire").addEventListener("click", () => {
  click.fire();
});
