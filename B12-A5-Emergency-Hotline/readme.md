


### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: 
*getElementById:By using getElementById, we can find a single element by unique "id".

*getElementsByClassName: By using getElementsByClassName, we can find multiple elements by a specific "class" name and return them as a list.

*querySelector: By using querySelector, we can find the first element that match a specific "css selector".

*querySelectorAll: By using querySelectorAll, we can find all elements that match a specific "css selector", and reutrn them as a NodeList.

2. How do you **create and insert a new element into the DOM**?
Ans: let see one example for better understanding:

const historyContainer = document.getElementById('history-container');
const div = document.createElement('div');
 div.innerHTML = `insert a new element`
  historyContainer.appendChild(div);


3. What is **Event Bubbling** and how does it work?
Ans:
*Event Bubbling: Event Bubbling means an event like a click on an element, bubbles up and triggers all of its parent element

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:
*Event Delegation: By using Event Delegation, we just add one listener to "parent" element,then this listener handles events for all the children....it is useful because it reducing the number of event listeners, and also work for new elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
*preventDefault(): this will stop the default action of an event...its solve the reloding problem when we clicked.

*stopPropagation(): this will stop an event from bubbling up to their parent element...and the event stops right where it started


