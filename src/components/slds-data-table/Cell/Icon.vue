<template>
    <td class="slds-cell-edit">
        <span class="slds-grid" :class="alignment">
            <slds-icon
                v-if="cell != null"
                :icon="cell.iconName"
                :icon-class="cell.iconClass"
                v-bind="[cell.size, cell.variant]"
                :title="cell.title"/>
        </span>
    </td>
</template>

<script>
    import SldsCell from './Cell'

    export default {
        extends: SldsCell,
        props: {
            cell: {
                type: Object,
            },
        },
    }
</script>
