<template>
    <header class="slds-modal__header slds-theme_alert-texture" :class="[{'slds-modal__header_empty': headerEmpty}, 'slds-theme_' + variant]">

        <!-- Close button -->
        <slds-button-icon
            icon-name="utility:close"
            container="none"
            variant="inverse"
            size="large"
            title="close"
            class="slds-modal__close"
            @click.stop="onClose"/>

        <!-- Heading -->
        <h2 v-if="!headerEmpty" class="slds-text-heading_medium slds-hyphenate">
            {{ heading }}
        </h2>

    </header>
</template>

<script>
    import SldsButtonIcon from '../ButtonIcon/Index'

    export default {
        components: {
            SldsButtonIcon,
        },
        props: {
            headerEmpty: {
                type: Boolean,
                required: true,
            },
            heading: {
                type: String,
            },
            variant: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'shade',
                        'inverse',
                        'alt-inverse',
                        'success',
                        'info',
                        'warning',
                        'error',
                        'offline',
                    ].indexOf(value) !== -1
                },
            },
        },
        methods: {
            onClose() {
                this.$emit('close');
            }
        },
    }
</script>