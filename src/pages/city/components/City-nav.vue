<template>
  <div class="cityNav">
    <ul @click="postData">
      <li v-for="(item,index) in cityLetter"
          v-bind:class="{selected:index==current}"
          :ref="item"
          @click="sss(index)" :key="index"
          @touchstart="bindTouchStart"
          @touchmove="bindTouchMove"
          @touchend="bindTouchEnd"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "City-nav",
    data() {
      return {
        current: 0,
        touchState:false,
        offsetVal:0,
        timer:null
      }
    },
    updated(){
      this.offsetVal=this.$refs['A'][0].offsetTop;
    },
    props: {
      cityLetter: Array
    },
    methods: {
      postData(e) {
        let letter = e.target.innerText;
        if (letter.length === 1) {
           this.$emit('zimu', letter)
        }

      },

      bindTouchStart(e){
        this.touchState=true
      },
      bindTouchMove(e){
        if(this.touchState){
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.timer=setTimeout(()=> {
            const index=Math.floor((e.touches[0].clientY-this.offsetVal-80)/20);
            if(index>=0&&index<this.cityLetter.length){
              this.$emit('zimu', this.cityLetter[index]);
              this.current=index;
            }
          },16)
        }
      },
      bindTouchEnd(){
        this.touchState=false
      },

      sss(a) {
        this.current = a
      }
    }

  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/css/common.styl"
  .selected
    background-color: rgba(228, 152, 104, 0.76)
    border-radius .06rem

  .cityNav
    position absolute
    top: 1.6rem
    right: .06rem
    bottom: 0
    width .45rem
    background-color: rgba(204, 204, 204, 0.49)

    ul
      padding-top .3rem
      height 100%
      display flex
      font-size .35rem
      flex-direction column
      align-items center
      justify-content center
      color $bgColor

      li
        width 100%
        line-height .4rem
        text-align center
</style>
