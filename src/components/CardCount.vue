<template>
    
    <div class="cards">

        <div class="card-single cardPM">
          <div class="card-txt">
            <h1 class="fontsFst">6</h1>
            <span class="fontsFst">Parish Members</span>
          </div>
          <div class="cardIcon">
            <span class="las la-users fontsFst"></span>
          </div>
        </div>

        <div class="card-single cardTF">
          <div class="card-txt">
            <h1 class="fontsSec">1056</h1>
            <span class="fontsSec">Total Families</span>
          </div>
          <div class="cardIcon">
            <span class="las la-users fontsSec"></span>
          </div>
        </div>

        <div class="card-single cardCM">
          <div class="card-txt">
            <h1 class="fontsThd">3</h1>
            <span class="fontsThd">Committee Members</span>
          </div>
          <div class="cardIcon">
            <span class="las la-users-cog fontsThd"></span>
          </div>
        </div>

        <div class="card-single cardPG">
          <div class="card-txt">
            <h1 class="fontsFrth">8</h1>
            <span class="fontsFrth">Prayer Groups</span>
          </div>
          <div class="cardIcon">
            <span class="las la-users-cog fontsFrth"></span>
          </div>
        </div>

    </div>

</template>



<script>

    export default {
      name: 'CardCount-',
      components:{
      }
    }

</script>


<style>


  
.cards .card-single:nth-child(1) {
  background: var(--multi-purple);
}
.cards .card-single:nth-child(2) {
  background: var(--multi-lightgrey);
}
.cards .card-single:nth-child(3) {
  background: var(--multi-lightpink);
}
.cards .card-single:nth-child(4) {
  background: var(--multi-charcol);
}



.card-single .fontsFst {
  color: #5b67cd;
}
.card-single .fontsSec {
  color: #4f86a7;
}
.card-single .fontsThd {
  color: #c7547a;
}
.card-single .fontsFrth {
  color: #b9b9b9;
}


.cards{
  /* margin-top: 14px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
}

.card-single{
  display: flex;
  justify-content: space-between;
  /* background: var(--font-white); */
  padding: 2rem;
  border-radius: 2px;
}


.cardIcon{
  height: fit-content;
}

.card-single div:last-child span{
  font-size: 3rem;
  /* color: var(--main-color); */
}


@media (max-width: 840px) {

  .cards {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    margin-top: 1.7rem;
  }
  .card-txt{
    width: 100%;
}

}

</style>