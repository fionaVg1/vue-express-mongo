<template>
  <div class="hotMovie">
    <ul class="ui-slide-content">
      <li class="ui-slide-item" v-for="movie in movies" v-bind:key="movie.name">
        <ul>
          <li class="poster">
            <a :href="movie.href" target="_blank">
              <img :src="movie.imageSrc">
            </a>
          </li>
          <li class="title">
            <a :href="movie.href" target="_blank">{{movie.name}}</a>
          </li>
          <li class="rating">
            <span :class="starClass(movie.score)"></span>
            <span class="subject-rate">{{movie.score}}</span>
          </li>
          <li class="ticket_btn">
            <span>
              <a :href="movie.href" target="_blank">选座购票</a>
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
    starClass(score) {
      let scoreFloat = Number.parseFloat(score) * 10;
      let scoreInt = 5 * Number.parseInt((scoreFloat + 4) / 5) - 50;
      return "rating-star allstar" + scoreInt ;
    }
  },
  computed: {},
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
ul{
  list-style:none;
}
.title a {
  display: inline-block;
  vertical-align: top;
  letter-spacing: normal;
  word-spacing: normal;
  height: 24px;
  line-height: 24px;
}
.title a:link,
.title a:visited,
.title a:hover,
.title a:active {
  color: #333;
  text-decoration: none;
}

.ticket_btn a:link,
.ticket_btn a:visited,
.ticket_btn a:hover,
.ticket_btn a:active {
  color: #fff;
  text-decoration: none;
}

.ticket_btn span {
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 90px;
  height: 24px;
  line-height: 24px;
  background-color: #268dcd;
  color: #fff;
  border-radius: 2px;
}
.allstar50,
.allstar45,
.allstar40,
.allstar35,
.allstar30,
.allstar25,
.allstar20,
.allstar15,
.allstar10,
.allstar05,
.allstar00,
.rating1-t,
.rating15-t,
.rating2-t,
.rating25-t,
.rating3-t,
.rating35-t,
.rating4-t,
.rating45-t,
.rating5-t,
.rating-t,
.starb ~ .stars5,
.starb ~ .stars4,
.starb ~ .stars3,
.starb ~ .stars2,
.starb ~ .stars1,
.collectors .stars5,
.collectors .stars4,
.collectors .stars3,
.collectors .stars2,
.collectors .stars1 {
  display: inline-block;
  zoom: 1;
  background: url(../../static/img/ic_rating_s.png) no-repeat;
  background: -webkit-image-set(
      url(../../static/img/ic_rating_s.png) 1x,
      url(../../static/img/ic_rating_s.png) 2x
    )
    no-repeat;
  background: -moz-image-set(
      url(../../static/img/ic_rating_s.png) 1x,
      url(../../static/img/ic_rating_s.png) 2x
    )
    no-repeat;
  background: -o-image-set(
      url(../../static/img/ic_rating_s.png) 1x,
      url(../../static/img/ic_rating_s.png) 2x
    )
    no-repeat;
  background: -ms-image-set(
      url(../../static/img/ic_rating_s.png) 1x,
      url(../../static/img/ic_rating_s.png) 2x
    )
    no-repeat;
  width: 55px;
  height: 11px;
  margin: 0 3px 0 0;
  overflow: hidden;
}
.allstar50 {
  background-position: 0 0px;
}

.allstar45 {
  background-position: 0 -11px;
}

.allstar40 {
  background-position: 0 -22px;
}

.allstar35 {
  background-position: 0 -33px;
}

.allstar30 {
  background-position: 0 -44px;
}

.allstar25 {
  background-position: 0 -55px;
}

.allstar20 {
  background-position: 0 -66px;
}

.allstar15 {
  background-position: 0 -77px;
}

.allstar10 {
  background-position: 0 -88px;
}

.allstar05 {
  background-position: 0 -99px;
}

.allstar00 {
  background-position: 0 -110px;
}
</style>