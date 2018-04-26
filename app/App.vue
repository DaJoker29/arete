<template>
  <div>
    <h2>Add Task</h2>
    <form @submit.prevent="addTodo">
      <input 
        v-model="todo" 
        type="text" 
        placeholder="Add new task"
        name="todo">
      <span>{{ todo }}</span>
    </form>
    <div class="listContainer">
      <div class="activeTodos">
        <h3>Doing</h3>
        <ul>
          <li>Take out the Trash <a href=""><i class="fa fa-check-circle"/></a>&nbsp;<a href=""><i class="fa fa-minus-circle"/></a></li>
          <li>Take out the Trash <a href=""><i class="fa fa-check-circle"/></a>&nbsp;<a href=""><i class="fa fa-minus-circle"/></a></li>
          <li>Take out the Trash <a href=""><i class="fa fa-check-circle"/></a>&nbsp;<a href=""><i class="fa fa-minus-circle"/></a></li>
        </ul>
      </div>
      <div class="inactiveTodos">
        <h3>To Do</h3>
        <ul>
          <li>Take out the Trash <a href=""><i class="fa fa-minus-circle"/></a></li>
          <li>Take out the Trash <a href=""><i class="fa fa-minus-circle"/></a></li>
          <li>Take out the Trash <a href=""><i class="fa fa-minus-circle"/></a></li>
        </ul>
      </div>
      <div class="completedTodos">
        <h3>Done</h3>
        <ul>
          <li>Take out the Trash <a href=""><i class="fa fa-plus-circle"/></a></li>
          <li>Take out the Trash <a href=""><i class="fa fa-plus-circle"/></a></li>
          <li>Take out the Trash <a href=""><i class="fa fa-plus-circle"/></a></li>
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
    };
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
</style>
