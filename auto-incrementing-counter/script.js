const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";
  
    const updateCounter = () => {
      const target = +counter.dataset.target;
      const count = +counter.innerText;
      const increment = target / 200;
  
      counter.innerText = count < target ? Math.ceil(count + increment) : target;
  
      if (count < target) setTimeout(updateCounter, 1);
    };
  
    updateCounter();
  });
  