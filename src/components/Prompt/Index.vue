<template>
    <div>

        <!-- Prompt -->
        <section tabindex="-1" class="slds-modal slds-fade-in-open slds-modal_prompt">
            <div class="slds-modal__container">

                <!-- Header -->
                <slds-prompt-header :header-empty="headerEmpty" :heading="heading" @close="onClose"/>

                <!-- Body -->
                <div class="slds-modal__content" :class="bodyClass">
                    <slot name="body"/>
                </div>


            </div>
        </section>
        <div class="slds-backdrop slds-backdrop_open"/>
    </div>
</template>

<script>
    import SldsPromptFooter from './Footer'
    import SldsPromptHeader from './Header'

    export default {
        components: {
            SldsPromptFooter,
            SldsPromptHeader,
        },
    }
</script>

<style scoped>

</style>