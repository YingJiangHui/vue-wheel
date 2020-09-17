<template>
    <div class="col" :class="getSpan"
         :style="getGutter">
        <div style="border: 1px solid green; height: 100px;">
            <slot></slot>
        </div>
    </div>
</template>
<script lang='ts'>
  const validator = (value) => {
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach(item => {
      if (!['offset', 'span'].indexOf(item)>=0) {
        valid = false;
      }
    });
    return valid;
  };
  export default {
    name: 'WCol',
    props: {
      span: {
        type: [String, Number]
      },
      offset: {
        type: [String, Number]
      },
      ipad: {type: Object, validator},
      narrowPc: {type: Object, validator},
      pc: {type: Object, validator},
      widePc: {type: Object, validator},
      iphone: {type: Object, validator}
    },
    data() {
      return {
        gutter: 0
      };
    },

    computed: {
      getSpan() {
        let {ipad, narrowPc, pc, widePc, iphone} = this;
        const createClasses = (obj, size) => {
          if(!obj)return []
          const {span, offset} = obj;
          const array = [];
          if (span) {
            array.push(`col-${size}-${span}`);
          }
          if (offset) {
            array.push(`offset-${size}-${offset}`);
          }
          return array
        };
        return [
          this.span && `col-${this.span}`,
          this.offset && `offset-${this.offset}`,
          ...createClasses(ipad,'ipad'),
          ...createClasses(narrowPc,'narrow-pc'),
          ...createClasses(pc,'pc'),
          ...createClasses(widePc,'wide-pc'),
          ...createClasses(iphone,'iphone'),
        ];
      },
      getGutter() {
        return {paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'};
      }
    }
  };

</script>

<style lang="scss" scoped>
    .col {
        height: 100px;
        width: 100%;
        $class-prefix: 'col-';
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }

        $class-prefix: 'offset-';
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
        @media (min-width: 0) {
            $class-prefix: 'col-iphone-';
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: 'offset-iphone-';
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width: 568px) {
            $class-prefix: 'col-ipad-';
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: 'offset-ipad-';
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width: 768px) {
            $class-prefix: 'col-narrow-pc-';
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: 'offset-narrow-pc-';
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width: 962px) {
            $class-prefix: 'col-pc-';
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: 'offset-pc-';
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width: 1200px) {
            $class-prefix: 'col-wide-pc-';
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: 'offset-wide-pc-';
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }

    }




</style>