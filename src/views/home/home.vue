<template>
    <div id="home">
      <p>this is home page !!!!</p>
      <p>909</p>
      <p>{{msg}}</p>

    </div>
</template>

<script>
    export default {
      data(){
        return {
          msg: 'this is msg'
        }
      },
      mounted:function () {
        this.$nextTick(function () {
          function P() {
            this.age = 12;
          }
          P.prototype={};
          P.prototype.constructor = P;
          let p1 = new P();
          console.log(P.prototype.constructor);
          console.log(p1.constructor);
          console.log([...new Set([4,3,2,5,4,3])]);
          /* jQuery核心架构 */
          var ajquery = function (selector,context) {
            return new ajquery.prototype.init();
          }
          ajquery.prototype = {
            init:function () {
              return this;
            },
            name:function () {
              return this.age;
            },
            age:20
          };
          ajquery.prototype.init.prototype = ajquery.prototype;
          window.$ = window.ajquery = ajquery;
          console.log($('#div').name());
        })
      }
    }
</script>

<style scoped>

</style>
