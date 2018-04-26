<template>
  <div>
    <h2>Add Task</h2>
    <form @submit.prevent="addTodo">
      <input 
        v-model="todo" 
        type="text" 
        placeholder="Add new task"
        name="todo">
    </form>
    <div class="listContainer">
      <div class="activeTodos">
        <h3>Doing</h3>
        <ul>
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
        </ul>
      </div>
      <div class="inactiveTodos">
        <h3>To Do</h3>
        <ul>
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
        </ul>
      </div>
      <div class="completedTodos">
        <h3>Done</h3>
        <ul>
          <li 
            v-for="(data, index) in todos.done" 
            :key="index">
            {{ data.todo }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
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
  },
};
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Exo+2';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

body {
  font-family: 'Exo 2', sans-serif;
  background-color: #ccc;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
}

body,
html {
  margin: 0;
  height: 100%;
}

.listContainer > div {
  background-color: #fff;
  margin: 0.5rem 0;
  padding: 0.5rem;
  text-align: center;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 0.5rem;
  font-size: 1.3rem;
  background-color: #e0edf4;
  border-left: 5px solid blue;
  margin-bottom: 0.25rem;
  color: navy;
}

i {
  float: right;
  padding-left: 0.25rem;
}
</style>
