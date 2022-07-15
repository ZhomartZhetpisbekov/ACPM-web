<template>
  <div class="become-member">
    <div class="content-container">
      <h2>Become an ACPM Member!</h2>
      <p>
        Ser genuspedagog sönera. Osm näsam sölogi. Infradonde makrolisamma sangen. Fin supranade i reatreskap. Petidafynera trollfilter: osolig. Dill tånde. 
      </p>
      <a href="#">MORE ABOUT ACPM MEMBERSHIP</a>
    </div>
    <div class="image-container">
    </div>
  </div>
</template>

<script >

export default {
  name: "BecomeMember",
  props: {
  },
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
/* Become Member */
.become-member {
  /* border: 1px solid #fff; */
  width: 85%;
  margin: auto;
  /* height: 480px; */
  display: flex;
  color: #000;
  /* justify-content: center; */
  border-radius: 20px;
  margin-bottom: 80px;
}

.content-container {
  width: 45%;
  height: 480px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 35px;
  text-align: center;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

h2 {
  font-size: 1.8rem;
  /* margin-bottom: 50px; */
}

p {
  font-size: 1.2rem;
  /* margin-bottom: 40px; */
}

a {
  padding: 15px 40px;
  background: #1E68FC;
  border-radius: 20px;
  transition: all 0.25s ease;
}

a:hover {
  color: #fff;
  transform:scale(1.1,1.1);
}

.image-container {
  width: 55%;
  background-image: url(../../assets/HomePage/become-member.png);
  background-position: center center;
  /* background-attachment: fixed; */
  background-size: cover;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

@media only screen and (max-width: 720px) {
  .become-member {
    flex-direction: column;
  }
  
  .content-container {
    width: 100%;
    height: 380px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 20px;
  }

  .image-container {
    width: 100%;
    height: 300px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 0;
  }
}

</style>