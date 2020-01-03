<template>
  <div class="hotMovie">
    <ul class="ui-slide-content">
      <li class="ui-slide-item" v-for="movie in movies" v-bind:key="movie.name">     
        <ul>
          <li class="poster">
            <a v-on:click="movieDetail">
              <img :src="movie.imageSrc">
            </a>
          </li>
          <li class="title">
            <a v-on:click="movieDetail">{{movie.name}}</a>
          </li>
          <li class="rating">
            <span class="rating-star allstar30"></span>
            <span class="subject-rate"></span>
          </li>
          <li class="ticket_btn">
            <span>
              <a v-on:click="movieDetail">选座购票</a>
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HotMovie",
  data() {
    return {
      movies: []
    };
  },
  methods: {
    movieDetail: function() {}
  },
  created() {    
    axios
      .get("/api/getHotMovies")
      .then(response => {
        this.movies = response.data;
      })
      .catch(error => {
        console.log(error);
      })
      .finally();
  }
};
</script>
<style scoped>
</style>