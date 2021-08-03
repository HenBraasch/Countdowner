<template>
 <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <button v-if="!isOpen" class="btn btn-outline-primary" aria-label="Toggle the new event form" type="button" @click.prevent="$emit('new-event')">Add</button>
            <button v-if="isOpen" class="btn btn-outline-primary" aria-label="Toggle the new event form" type="button" @click.prevent="$emit('close-new-event')">Close</button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Share</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                </ul>
            </div>
        </div>
      </nav>
</template>

<script>
    export default{
        data: function(){
            return{
               
            }
        },
        methods:{

        },
        props:{
            isOpen: Boolean
        }
    }
</script>

<style>
</style>