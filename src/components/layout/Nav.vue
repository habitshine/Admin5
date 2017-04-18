<template>
    <nav class="layout-nav">
        <span class="logo">
            <p>Admin5</p>
        </span>
        <span class="tools">
            <span class="envelope">
                <span class="label label-default"><i class="fa fa-envelope" aria-hidden="true"></i> 0 </span>
        </span>
        <span class="avator">
                <div class="dropdown">
                    <img src="../../assets/avator.jpeg">
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            </span>
        </span>
    </nav>
</template>
<script>
import Push from 'push.js'
export default {
    name: 'Nav',

    mounted() {
        // Push.create("Hello world!", {
        //     body: "How's it hangin'?",
        //     icon: 'icon.png',
        //     timeout: 4000,
        //     onClick: function() {
        //         window.focus();
        //         this.close();
        //     }
        // });
    },

    methods: {

    }

}
</script>
<style scoped lang=scss>
$h: 50px;
.layout-nav {
    padding: 0 15px;
    height: $h;
    border-radius: 0;
    position: relative;
    z-index: 1958;
    background: #fff;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .2);
    .logo {
        float: left;
        height: $h;
        p {
            height: $h;
            line-height: $h;
            color: #666;
            font-size: 20px;
        }
    }
    .tools {
        float: right;
        height: $h;
        overflow: hidden;
        .envelope {
            float: left;
            margin: 15px;
            &:hover {
                cursor: pointer;
            }
        }
        .avator {
            float: left;
            margin: 10px;
            width: 30px;
            height: 30px;
            overflow: hidden;
            border-radius: 3px;
            &:hover {
                cursor: pointer;
            }
            img {
                display: block;
                width: 100%;
            }
        }
    }
}
</style>
