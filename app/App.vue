<template>
  <div>
    <h1>{{ appName.titleCase() }}
      <small>v{{ version }}</small>
    </h1>
    <p>
      <a 
        class="clearLink"
        href="" 
        @click.prevent="clearDone">Clear Done Tasks</a>
    </p>
    <form @submit.prevent="addTodo">
      <input 
        v-model="todo" 
        type="text" 
        placeholder="Add new task"
        name="todo">
    </form>
    <div class="listContainer">
      <div class="activeTodos">
        <h3>Doing <small>({{ todos.doing.length }})</small></h3>
        <ul>
          <transition-group 
            name="list" 
            enter-active-class="animated flipInX" 
            leave-active-class="animated flipOutX">
            <li 
              v-for="(data, index) in todos.doing" 
              :key="index">
              {{ data.todo }}
              <i 
                class="fa fa-check-circle" 
                @click="shift('doing', 'done', index)"/>
              <i 
                class="fa fa-arrow-circle-down" 
                @click="shift('doing', 'todo', index)"/>
            </li>
          </transition-group>
        </ul>
      </div>
      <div class="inactiveTodos">
        <h3>To Do <small>({{ todos.todo.length }})</small></h3>
        <ul>
          <transition-group 
            name="list" 
            enter-active-class="animated flipInX" 
            leave-active-class="animated flipOutX">
            <li 
              v-for="(data, index) in todos.todo" 
              :key="index">
              {{ data.todo }}
              <i 
                class="fa fa-times-circle" 
                @click="remove('todo', index)"/>
              <i 
                class="fa fa-arrow-circle-up" 
                @click="shift('todo', 'doing', index)"/>
            </li>
          </transition-group>
        </ul>
      </div>
      <div class="completedTodos">
        <h3>Done <small>({{ todos.done.length }})</small></h3>
        <ul>
          <transition-group 
            name="list" 
            enter-active-class="animated flipInX" 
            leave-active-class="animated flipOutX">
            <li 
              v-for="(data, index) in todos.done" 
              :key="index">
              {{ data.todo }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { name as appName, version } from '../package.json';

export default {
  data() {
    return {
      appName,
      version,
      todo: '',
      todos: {
        doing: [{ todo: 'Buy milk' }],
        todo: [{ todo: 'Add to doing list' }, { todo: 'Learn Vue.js' }],
        done: [{ todo: 'Already done this' }],
      },
    };
  },
  created: function() {
    this.getState();
  },
  methods: {
    addTodo() {
      this.todos.todo.push({ todo: this.todo });
      this.todo = '';
      this.saveState();
    },
    remove(prop, id) {
      this.todos[prop].splice(id, 1);
      this.saveState();
    },
    shift(from, to, id) {
      const task = this.todos[from].splice(id, 1);
      this.todos[to].push(task[0]);
      this.saveState();
    },
    saveState() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    getState() {
      if (localStorage.getItem('todos')) {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      }
    },
    clearState() {
      localStorage.removeItem('todos');
    },
    clearDone() {
      this.todos.done = [];
      this.saveState();
    },
  },
};
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Exo+2';
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

:root {
  --black: #000;
  --gray: #666;
  --white: #fff;
  --green: #66b240;
  --neon: #54ff00;
  --blue: #192acc;
  --orange: #cc4b14;
}

body {
  font: 100%/1 'Exo 2', sans-serif;
  background-color: var(--white);
  color: var(--black);
  padding: 3rem;
}

body,
html {
  margin: 0;
  height: 100%;
}

h1 {
  font-size: 6rem;
}

h2 {
  font-size: 4rem;
}

h3 {
  font-size: 2rem;
}

h1,
h2,
h3,
h4 {
  color: var(--orange);
}

h1 > small,
h2 > small,
h3 > small {
  font-size: 0.5em;
}

a {
  color: var(--green);
  text-decoration: none;
}

small {
  color: var(--gray);
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 0.5rem;
  font-size: 1.3rem;
  border-left: 4px solid var(--green);
  margin-bottom: 0.25rem;
  box-shadow: 1px -1px 3px gray;
}

i {
  float: right;
  padding-left: 0.25rem;
  cursor: pointer;
}

input {
  width: 100%;
  border: 0;
  padding: 1rem;
  font-size: 2rem;
  background-color: var(--gray);
  color: var(--white);
}

input:focus {
  box-shadow: 0 0 4px inset var(--orange);
}

.listContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
}

.listContainer > div {
  margin: 0.5rem 0;
  padding: 0.5rem;
}

.completedTodos li {
  background-color: var(--white);
  border-color: var(--gray);
  color: var(--gray);
}

.completedTodos h3 {
  color: var(--gray);
}

.activeTodos li {
  background-color: var(--green);
  border-color: var(--neon);
  color: var(--white);
}

.activeTodos h3 {
  color: var(--green);
}

.inactiveTodos li {
  background-color: var(--orange);
  border-color: var(--black);
  color: var(--white);
}

.inactiveTodos h3 {
  color: var(--orange);
}

.clearLink {
  float: right;
  margin: 1rem;
}
</style>
