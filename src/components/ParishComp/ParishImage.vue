<template>
    <div class="cd">
        <ul>
            <li class="card">
                <div class="imageDiv">
                    <img src="@/assets/church01.jpg" alt="Church" />
                </div>
                <div class="cnd">
                    <h4>Revive Haven Church</h4>
                    <h6>Revive Haven Church, Bangalore</h6>
                </div>
            </li>
            <li class="card">
                <div class="imageDiv">
                    <img src="@/assets/Metropolitan.jpg" alt="Metropolitan" />
                </div>
                <div class="cnd">
                    <h4>John Doe</h4>
                    <h6>Metropolitan</h6>
                </div>
            </li>
            <li class="card">
                <div class="imageDiv">
                    <img src="@/assets/bishop.jpg" alt="Diocesan Bishop" />
                </div>
                <div class="cnd">
                    <h4>John Doe</h4>
                    <h6>Diocesan Bishop</h6>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>

</script>

<style scoped>
.cd{
  /* margin-top: 14px; */
    width: 100%;
    padding: 2rem;
    /* border: 2px solid #c7c7c7; */
    border-radius: 3px;
    /* box-shadow: inset 0px 0px 9px 2px #dddddd9e; */
}

.cd ul{
    display: flex;
    justify-content: space-evenly;
}

.titleName{
    display: flex;
    justify-content: flex-start;
}

.names{
    display: flex;
    justify-content: flex-end;
}

.fill{
    color: #646464;
    margin-left: 5px;
    margin-bottom: 0px;
}

.txtarea{
    width: 70%;
    justify-content: space-around;
    display: flex;
    height: fit-content;
    border-bottom: 1.5px solid #c7c7c7;
}

.imageDiv{
    height: 26rem;
    overflow: hidden;
}

.card {
	display: inline-block;
	width: 90%;
	/* max-width: 20rem; */
	margin: 1rem;
	font-size: 1rem;
	text-decoration: none;
	overflow: hidden;
	box-shadow: 0 0 3rem -1rem rgba(0,0,0,0.5);
	transition: transform 0.1s ease-in-out, box-shadow 0.1s;
}
.card img {
	display: flex;
    /* height: 100%; */
    width: 100%;
    /* height: 300px; */
    object-fit: cover;
}

.cnd{
    margin: 10px;
}



@media (max-width: 1000px) {

    .cd ul{
        flex-direction: column;
    }


}
</style>