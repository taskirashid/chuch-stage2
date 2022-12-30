<template>
    <div class="pmDiv cd">
      
      <!-- address -->
      <div class="outerCard">
          <h3 class="parishName">revive haven church</h3>
          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Address :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">Cross 4th Phase, Peenya Industrial Area, Bangalore</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Email :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">revivehavenchurch@gmail.com</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Website :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">www.revivehavenchurch.in</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Mobile-1 :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">9996663217</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Mobile-2 :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">9885569321</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Landline-1 :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">2666421</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Landline-2 :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">2442991</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Landline :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">www.revivehavenchurch.in</h5>
            </div>
          </div>

          <div class="address">
            <div class="titleName">
                <h5 class="card-title">Vicar :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">John Doe</h5>
            </div>
        </div>
        <div class="address">
            <div class="titleName">
                <h5 class="card-title">Assi. Vicar :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">John Doe</h5>
            </div>
        </div>
        <div class="address">
            <div class="titleName">
                <h5 class="card-title">Sexton :</h5>
            </div>
            <div class="txtarea">
                <h5 class="fill">John Doe</h5>
            </div>
        </div>

        
        <!-- <h6 class="card-subtitle mb-2 text-muted">Cross 4th Phase, Peenya Industrial Area, Bangalore</h6> -->
        <!-- <h6 class="card-subtitle mb-2 text-muted">Zip code: 560058</h6> -->
        <!-- <h6 class="card-subtitle mb-2 text-muted">Karnataka</h6> -->
    </div>
        
    </div>
</template>

<script>

export default {
  name: 'ParishMain-',
  components:{
  }
}

</script>

<style scoped>


.parishName{
  font-variant-caps: all-petite-caps;
    margin-top: 3px;
    margin-bottom: 10px;
    text-align: center;
    color: var(--main-color);
  /* text-transform: uppercase; */
  /* margin-bottom: 40px; */
}

.cd{
  /* margin-top: 14px; */
    width: 100%;
    padding: 4rem;
    /* border: 2px solid #c7c7c7; */
    /* border-radius: 3px; */
    /* box-shadow: inset 0px 0px 9px 2px #dddddd9e; */
  display: flex;
    justify-content: space-around;
}

.outerCard{
  /* padding: 20px; */
  display: block;
  justify-content: space-between;
  /* background: #fff; */
  /* padding: 2rem; */
  border-radius: 2px;
}

.address{
    display: flex;
}

.card-title{
    margin-right: 20px;
}

.titleName{
    width: 105px;
    display: flex;
    justify-content: flex-end;
}

.fill{
    color: #646464;
    margin-left: 5px;
    margin-bottom: 0px;
}

.txtarea{
    width: 500px;
    height: fit-content;
    border-bottom: 1.5px solid #c7c7c7;
}



@media (max-width: 650px) {

.news {
  /* display: block; */
}


}

</style>