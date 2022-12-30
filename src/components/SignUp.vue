<template>
    <div class="container signUp">

        <div class="container signupCard">
            <h2>SignUp</h2>
            <!-- <form> -->
                <div class="register">
                    <div class="form-group">
                    <input type="text" 
                        placeholder="Full Name"
                        id="fullName"
                        v-model="name"
                        required
                        class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" 
                        placeholder=" Email"
                        id="email"
                        v-model="email"
                        required
                        class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" 
                        class="form-control"
                        id="password"
                        v-model="password"
                        required
                        placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="password"
                        class="form-control"
                        id="reenterpassword"
                        v-model="reenterPassword"
                        required
                        placeholder="Re-enter Password">
                        <div v-if="password != reenterPassword" class="text-danger">passwords dont moatch</div>
                    </div>
                    <button @click="register">SignUp</button>
                </div>
            <!-- </form> -->
        </div>
        
    </div>
</template>

<script>

export default {
  name: 'SignUp',
  data(){
    return{
        name: "",
        email: "",
        password: "",
        reenterPassword: ""
    }
  },
  methods: {
      register: function() {
        console.log('Name: ' + this.name);
        console.log('Email: ' + this.email );
        console.log('------------------------------');
  }

  }
}

</script>

<style scoped>
*{
    /* border: 1px solid red; */
}



.signUp{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
    background: linear-gradient(358deg, #d7a10be0, #d7a10be0), url(@/assets/church06.jpg);
    /* background-image: url(@/assets/church06.jpg); */
    /* background: #d7a10b; */
    background-size: cover;
    width: 100%;
    z-index: -99;
}
.signUp h2{
    margin-top: 0px;
    margin-bottom: 30px;
    color: #6c6e6e;
}
.signupCard{    
    background: #f6f6f6;
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 36%);
    border: 1px solid rgb(255 255 255 / 9%);
    border-radius: 24px;
    padding: 48px;
    width: auto;
    z-index: 100;
}
.register input{
    width: 300px;
    height: 40px;
    border-radius: 5px;
    color: #6a6767;
    border: 1px solid #e3e3e3;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
}
.register button{
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #d7a10b;
    background: #d7a10b;
    cursor: pointer;
    font-weight: 600;
}
.sign{
    margin-top: 30px;
}
.sign p{
    color: #252525;
}
.sign p a{
    color: #416af4;
}
</style>