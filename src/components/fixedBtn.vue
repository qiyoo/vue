<template>
  <div id="fixedBtn" class="fixedBtn" v-show="isshowBtn" v-on:click="scrollToTop">
      <i class="fa fa-angle-up fa-2x" style="margin-top:0.09rem;"></i> 
  </div>
</template>

<script>

export default {
  name: 'arrow',
  mounted:function(){
     this.$nextTick(function(){
         window.addEventListener('scroll',this.onScroll);
     }) 
  },
  methods:{
        scrollToTop:function(){
            window.scrollTo(0,0)
        },
        onScroll:function(){
            let scrolled = document.documentElement.scrollTop || document.body.scrollTop
            if(scrolled>200){
                this.isshowBtn = true;
            }else{
                 this.isshowBtn = false;
            }
        }

  },
  data(){
        return{
            isshowBtn:false
        }
    }
}

</script>
<style scoped>
.active{
    display: block;
}
.fixedBtn{
    position: fixed;
    right: .30667rem;
    bottom: 1.7rem;
    vertical-align: middle;
    width: 1.09333rem;
    height: 1.09333rem;
    line-height: 1.09333rem;
    border-radius: 50%;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    -o-border-radius:50%;
    background: #fff;
}
</style>



