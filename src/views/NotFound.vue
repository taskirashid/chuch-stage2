<template>
    <div class="error">
        <div class="notFound">
            <img src="@/assets/404-17.svg" alt="">
            <a href="/overview">
                <div class="">
                    <h4>Back to Dashboard</h4>
                </div>
            </a>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

*{
    /* border: 1px solid red; */
}

.error{
}

template{
    display: flex;
}

.notFound{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
    background: var(--text-grey);
    /* background: url(@/assets/404-17.svg); */
    /* background-repeat: no-repeat; */
    width: 100%;
    /* height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; */
}
.notFound h1{
    font-weight: 800;
}
.notFound img{
    height: inherit;
    width: inherit;
}
.notFound a{
    position: absolute;
    /* border: 3.5px solid var(--multi-charcol); */
    border: 3.5px solid #000;
    padding: 1.5rem;
    border-radius: 11px;
    bottom: 10%;
}

h4{
    /* color: var(--main-color); */
    color: #d7d8d9;
    font-size: 16px;
    font-weight: 500;
}

</style>