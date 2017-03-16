<template>
    <div class="form-panel">
        <div class="row">
            <template v-for="component in form">
                <div :class="[
                    'col-xs-' + component.column[0], 
                    'col-sm-' + component.column[1], 
                    'col-md-' + component.column[2], 
                    'col-lg-' + component.column[3]]">
                    <h5>{{component.title}}</h5>
                    <component v-model="formValues[component.name]" :is="'v_' + component.type" :opts="component">
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
import v_rateStar from '../components/readonly/RateStar'

export default {
    name: 'Form',

    props: {
        form: {
            required: true
        },

        value: {}
    },

    data() {
        return {
            formValues: {}
        };
    },

    created() {
        // 给什么表单值, 渲染什么值(默认值)
        this.form.forEach(component => {

            this.$set(this.formValues, component.name, this.value[component.name]);
        });
        this.$emit('input', this.formValues);
    },

    computed: {

    },

    // watch: {
    //     value(values) {
    //         this.$emit('input', this.formValues);
    //     }
    // },

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
        v_upload,
        v_rateStar
    }
}
</script>
<style scoped lang=scss>
</style>
