1. What problem does the context API help solve?
* To be able to give the components props where they are needed.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
* Actions are used to to send data from the app to the store. Reducers say how the app's state changes because of the actions that are sent to the store. The store is where the state "tree" is held. The store is known as 'single source of truth' because the only way to change data in the UI is to dispatch an action which then changes the state in the reducer.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
* Application state is a global state and component state is local. It depends on the size of your app, how many components need to share the state. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
* Thunk is a function which returns the action object that can be used when needed.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
* I'm not sure I have a favorite one yet since we have learned so many.  I see a point in both and trying to wrap my head around everything I really haven't thought about it though I have been starting to think about build week.