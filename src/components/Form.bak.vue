<template>
    <div class="form-panel">
        <div class="row">
            <template v-for="component in opts.form">
                <div :class="[
                    'col-xs-' + component.column[0], 
                    'col-sm-' + component.column[1], 
                    'col-md-' + component.column[2], 
                    'col-lg-' + component.column[3]]">
                    <h5>{{component.title}}</h5>
                    <component v-model="formData[component.name]" :is="'v_' + component.type" :opts="component">
                    </component>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import v_checkboxGroup from '../components/form/CheckboxGroup'
import v_selectMulit from '../components/form/SelectMulit'
import v_dateTime from '../components/form/DateTimePicker'
import v_radioGroup from '../components/form/RadioGroup'
import v_textarea from '../components/form/Textarea'
import v_linkage from '../components/form/Linkage'
import v_upload from '../components/form/FileApi'
import v_editor from '../components/form/Editor'
import v_select from '../components/form/Select'
import v_input from '../components/form/Input'


export default {
    name: 'Form',

    props: {
        opts: {
            required: true
        },

        default: {
            default () {
                return {};
            }
        },
        
        value: {}
    },

    created() {
        this.opts.form.forEach(component => {
            // observer 通过组件结构数据构建的formData
            // this.default[component.name]: 当前组件默认值
            this.$set(this.formData, component.name, this.default[component.name]);
        });
    },

    computed: {
        formData() {
            return this.value;
        }
    },

    watch: {
        formData() {
            this.$emit('input', this.formData);
            this.opts.form.forEach(component => {
                // observer 通过组件结构数据构建的formData
                // this.default[component.name]: 当前组件默认值
                this.$set(this.formData, component.name, this.default[component.name]);
            });
        }
    },

    components: {
        v_textarea,
        v_linkage,
        v_radioGroup,
        v_input,
        v_select,
        v_selectMulit,
        v_checkboxGroup,
        v_dateTime,
        v_editor,
        v_upload
    }
}
</script>
<style scoped lang=scss>
</style>
