<template>
    <span class="slds-icon_container" :class="backgroundColor">
        <slds-svg
            :icon-name="iconName"
            class="slds-icon"
            :class="[iconClass, `slds-icon_${size}`, `slds-icon-text-${variant}`]"/>
    </span>
</template>

<script>
    import SldsSvg from '@/shared/Svg/index'
    import SldsColorable from '@/mixins/colorable'

    export default {
        components: {
            SldsSvg,
        },
        mixins: [SldsColorable],
        props: {
            iconClass: {
                type: String,
                required: false,
            },
            iconName: {
                type: String,
                required: true,
            },
            size: {
                type: String,
                default: 'medium',
                validator(value) {
                    return [
                        'xx-small',
                        'x-small',
                        'small',
                        'medium',
                        'large',
                    ].indexOf(value) !== -1
                }
            },
            variant: {
                type: String,
                default: 'none',
                validator(value) {
                    return [
                        'none',
                        'inverse',
                        'default',
                        'success',
                        'warning',
                        'error',
                        'light',
                    ].indexOf(value) !== -1
                }
            },
        },
        computed: {
            backgroundColor() {
                if (!!this.color) return this.setBackgroundColor();
                if (this.iconName == null) return;

                const [category, name] = this.iconName.trim().split(':', 2);
                return `slds-icon-${category}-${name.replace(/_/g, "-")}`;
            }
        },
    }
</script>
