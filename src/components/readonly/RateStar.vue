<template>
    <div class="">
        <span class="rating">
            <span
                    v-for="item in max" class="star"
                    :class="[classes[item - 1], { 'hover': hoverIndex === item }]"
                    @mousemove="setCurrentValue(item, $event)"
                    @click="selectValue(item)"
                    @mouseleave="resetCurrentValue"
                    :style="{ cursor: disabled ? 'auto' : 'pointer' }"></span>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'RateStar',
        data() {
            return{
                currentValue: this.value,
                hoverIndex: -1
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 5
            },
            iconClasses: {
                type: Array,
                default() {
                    return ['active', 'active', 'active'];
                }
            },
            voidIconClass: {
                type: String,
                default: 'el-icon-star-off'
            },
            disabledVoidIconClass: {
                type: String,
                default: 'el-icon-star-on'
            }
        },
        watch: {
            value(val) {
//                this.$emit('change', val);
                this.currentValue = val;
                console.log('test watch')
            }
        },
        methods: {
            setCurrentValue(value, event) {
                if (this.disabled) {
                    return;
                }
                this.currentValue = value;
                this.hoverIndex = value;
            },
            getValueFromMap(value, map) {
                let result = '';
                if (value <= this.lowThreshold) {
                    result = map.lowColor || map.lowClass;
                } else if (value >= this.highThreshold) {
                    result = map.highColor || map.highClass;
                } else {
                    result = map.mediumColor || map.mediumClass;
                }
                return result;
            },
            resetCurrentValue() {
                if (this.disabled) {
                    return;
                }
                this.currentValue = this.value;
                this.hoverIndex = -1;
            },
            selectValue(value) {
                if (this.disabled) {
                    return;
                }

                this.$emit('input', value);
                console.log(value)
            }
        },
        computed: {
            classes() {
                let result = [];
                let i = 0;
                let threshold = this.currentValue;

                for (; i < threshold; i++) {
                    result.push(this.activeClass);
                }
//                for (; i < this.max; i++) {
//                    result.push(this.voidClass);
//                }
                return result;
            },
            activeClass() {
                return this.getValueFromMap(this.currentValue, this.classMap);
            }
        },
        created() {
            if (!this.value) {
                this.$emit('input', 0);
            }
            this.classMap = {
                lowClass: this.iconClasses[0],
                mediumClass: this.iconClasses[1],
                highClass: this.iconClasses[2],
//                voidClass: this.voidIconClass,
//                disabledVoidClass: this.disabledVoidIconClass
            }
        }
    }
</script>
<style scoped lang=scss>
    .rating{
        unicode-bidi:bidi-override;
        direction:ltr;
        font-size:22px;
        display: inline-block;
        overflow: hidden;
    }
    .rating span.star{
        font-family:FontAwesome;
        font-weight:normal;
        font-style:normal;
        display:inline-block;
        float: left;
        padding-right: 3px;
        transform: scale(1);
        transition: .3s
    }
    .rating span.star:hover{
        cursor:pointer;
        transform: scale(1.15)
    }
    .rating span.star:before{
        content:"\f006";
        color:rgb(198, 209, 222);
        transition: .3s
    }
    /*.rating span.star:hover:before{content:"\f005";color:rgb(247, 186, 42);}*/
    .rating span.active:before{content:"\f005";color:rgb(247, 186, 42);}
    /*.rating span.star:hover:before,.rating span.star:hover~span.star:before{content:"\f005";color:rgb(247, 186, 42);}*/
</style>
