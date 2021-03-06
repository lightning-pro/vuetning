<template>
    <section class="slds-docked-composer slds-grid slds-grid_vertical" :class="`slds-is-${state}`">

        <!-- Header -->
        <header class="slds-docked-composer__header slds-grid slds-shrink-none">

            <!-- Heading -->
            <div class="slds-media slds-media_center slds-no-space">

                <!-- Figure -->
                <slds-icon :icon="iconName" x-small class="slds-media__figure slds-m-right_x-small"/>

                <!-- Text -->
                <div class="slds-media__body">
                    <h2 class="slds-truncate" title="Header">
                        {{ heading }}
                    </h2>
                </div>

            </div>

            <!-- Actions -->
            <div class="slds-col_bump-left slds-shrink-none">

                <slds-button-icon
                    v-if="hasMinimizeButton && state === 'close'"
                    ref="erectButton"
                    icon="utility:erect_window"
                    title="Erect window"
                    @click="onErect"/>

                <slds-button-icon
                    v-if="hasMinimizeButton && state === 'open'"
                    ref="minimizeButton"
                    icon="utility:minimize_window"
                    title="Minimize window"
                    @click="onMinimize"/>

                <slds-button-icon
                    v-if="hasExpandButton"
                    ref="expandButton"
                    icon="utility:expand_alt"
                    title="Expand Composer"
                    @click="onExpand"/>

                <slds-button-icon
                    ref="closeButton"
                    icon="utility:close"
                    title="Close"
                    @click="onClose"/>

            </div>

        </header>

        <!-- Body -->
        <div class="slds-docked-composer__body">
            <slot name="body"/>
        </div>

        <!-- Footer -->
        <footer v-if="$slots.footer" class="slds-docked-composer__footer slds-shrink-none">
            <slot name="footer"/>
        </footer>

    </section>
</template>

<script>
    import SldsButtonIcon from '../slds-button-icon/index.vue'
    import SldsIcon from '../slds-icon/index.vue'

    export default {
        name: 'SldsDockedComposer',
        components: {
            SldsButtonIcon,
            SldsIcon,
        },
        props: {
            hasExpandButton: {
                type: Boolean,
                default: true,
            },
            hasMinimizeButton: {
                type: Boolean,
                default: true,
            },
            heading: {
                type: String,
                required: true,
            },
            iconName: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                state: 'open',
            }
        },
        methods: {
            onClose() {
                this.$emit('close');
            },
            onErect() {
                this.state = 'open';
                this.$emit('erect');
            },
            onExpand() {
                this.$emit('expand');
            },
            onMinimize() {
                this.state = 'close';
                this.$emit('minimize');
            },
        },
    }
</script>

<style scoped lang="scss">
    header {
        height: 42px;
    }
</style>
